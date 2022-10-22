import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { uid } from "../../Model/userSlice";

import API from "../../Model/API";

export function NewItemViewModel() {
  const userUID = useSelector(uid);
  const { id } = useParams();
  const [loader, setLoader] = useState(false);
  const [success, setSuccess] = useState(false);

  let navigate = useNavigate();

  const handlePostJob = (data) => {
    if (data.title && data.location && data.field && data.Tech && userUID) {
      setLoader(true);

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
      alert("fields cannot be empty!");
    }
  };

  return {
    success,
    loader,
    handlePostJob,
  };
}
