import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import "./newItem.css";
import { useSelector } from "react-redux";
import { uid } from "../../Model/userSlice";
import API from "../../Model/API";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const NewItem = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [field, setField] = useState("");
  const [remote, setRemote] = useState(false);
  const [Tech, setTech] = useState("");
  const userUID = useSelector(uid);
  const { id } = useParams();
  const [loader, setLoader] = useState(false);
  const [success, setSuccess] = useState(false);
  let navigate = useNavigate();

  const handleSubmit = () => {
    if (title && location && field && Tech && userUID) {
      if (userUID) {
        setLoader(true);
        let data = {
          uid: userUID,
          title: title,
          location: location,
          field: field,
          remote: remote,
          Tech: Tech,
          created: new Date(),
        };
        API.postCollection(data, id)
          .then(() => {
            console.log("success");
            setLoader(false);
            setSuccess(true);
          })
          .catch((err) => {
            console.log(err);
            setLoader(false);
          });
      }
    } else {
      alert("fields cannot be empty!");
    }
  };

  const handleDelete = () => {
    if (userUID) {
      API.deleteJob(id).then(() => {
        navigate("/", { replace: true });
      });
    }
  };

  useEffect(() => {
    if (!userUID) {
      navigate("/", { replace: true });
    }
    if (id) {
      API.getJobId(id).then((data) => {
        console.log(data);
        setTitle(data.title);
        setLocation(data.location);
        setField(data.field);
        setRemote(data.remote);
        setTech(data.Tech);

        console.log(title);
      });
    }
  }, [id]);

  return (
    <div className="newItem">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Título</Form.Label>
          <Form.Control
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Título"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Localização</Form.Label>
          <Form.Control
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            placeholder="Localização"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Area de atuação</Form.Label>
          <Form.Select
            value={field}
            onChange={(e) => setField(e.target.value)}
            size="sm"
          >
            <option></option>
            <option>Developer</option>
            <option>Design</option>
            <option>DevOps</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Tecnologia</Form.Label>
          <Form.Select
            value={Tech}
            onChange={(e) => setTech(e.target.value)}
            size="sm"
          >
            <option></option>
            <option>Java</option>
            <option>Python</option>
            <option>React</option>
            <option>iOS</option>
            <option>Android</option>
            <option>Vuejs</option>
            <option>Angular</option>
            <option>PowerBI</option>
            <option>DesignUI</option>
            <option>Other</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            value={remote}
            onChange={(e) => setRemote(!remote)}
            type="checkbox"
            label="Remoto?"
          />
        </Form.Group>
        <Button
          onClick={handleSubmit}
          variant={`${loader ? "" : success ? "success" : "primary"}`}
        >
          {!loader ? (success ? "success" : "Submit") : "loading ..."}
        </Button>
        {id ? (
          <Button onClick={handleDelete} className="danger">
            delete
          </Button>
        ) : (
          ""
        )}
      </Form>
    </div>
  );
};
export default NewItem;
