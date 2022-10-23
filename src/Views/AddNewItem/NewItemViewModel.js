import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { uid } from "../../Model/userSlice";
import { getJobById } from "../../Components/Repository/JobsRepository";
import API from "../../Model/API";

export function NewItemViewModel() {
  const userUID = useSelector(uid);
  const { id } = useParams();
  const [loader, setLoader] = useState(false);
  const [success, setSuccess] = useState(false);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("");
  const [level, setLevel] = useState("");
  const [field, setField] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [remote, setRemote] = useState(false);
  const [Tech, setTech] = useState("");

  const setJobRemote = (e) => {
    setRemote(e.target.value);
  };

  const setJobLink = (e) => {
    setLink(e.target.value);
  };

  const setJobDescription = (e) => {
    setDescription(e.target.value);
  };

  const setJobField = (e) => {
    setField(e.target.value);
  };

  const setSeniority = (e) => {
    setLevel(e.target.value);
  };

  const setJobCountry = (e) => {
    setCountry(e.target.value);
  };

  const setJobLocation = (e) => {
    setLocation(e.target.value);
  };

  const setLoading = (e) => {
    setLoader(e.target.value);
  };

  const setTechnology = (e) => {
    setTech(e.target.value);
  };

  const setJobTitle = (e) => {
    setTitle(e.target.value);
  };

  let navigate = useNavigate();

  const handleDelete = () => {
    if (userUID) {
      API.deleteJob(id).then(() => {
        navigate("/", { replace: true });
      });
    }
  };

  const handlePostJob = () => {
    setLoader(true);
    let data = {
      uid: userUID,
      title: title,
      location: location,
      field: field,
      remote: remote,
      Tech: Tech,
      created: new Date(),
      link: link,
      country: country,
      level: level,
      description: description,
    };
    if (data.title && data.location && data.field && data.Tech && userUID) {
      API.postCollection(data, id)
        .then(() => {
          setLoader(false);
          setSuccess(true);
        })
        .catch((err) => {
          console.log(err);
          setLoader(false);
        });
    } else {
      alert("Fields cannot be empty!");
    }
  };

  const verifyUserID = () => {
    if (!userUID) {
      navigate("/", { replace: true });
    }
    if (id) {
      fetchJobById(id);
    }
  };

  const fetchJobById = async (id) => {
    const { error, result } = await getJobById(id);
    if (result) {
      setTitle(result.title);
      setLocation(result.location);
      setField(result.field);
      setRemote(result.remote);
      setTech(result.Tech);
      setCountry(result.country);
      setLevel(result.level);
      setLink(result.link);
      setDescription(result.description);
    } else {
      console.log(error);
    }
  };
  const params = {
    success,
    loader,
    handlePostJob,
    setTechnology,
    setJobTitle,
    title,
    location,
    country,
    level,
    field,
    description,
    link,
    remote,
    Tech,
    setJobRemote,
    setJobDescription,
    setJobLink,
    setJobField,
    setSeniority,
    setJobCountry,
    setJobLocation,
    setLoading,
    handleDelete,
    fetchJobById,
    id,
  };

  return {
    params,
    verifyUserID,
  };
}
