import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import "./newItem.css";
import { useSelector } from "react-redux";
import { uid } from "../../Model/userSlice";
import API from "../../Model/API";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getJobById } from "../../Components/Repository/JobsRepository";

import { NewItemViewModel } from "./NewItemViewModel";

const NewItem = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("");
  const [level, setLevel] = useState("");
  const [field, setField] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [remote, setRemote] = useState(false);
  const [Tech, setTech] = useState("");
  const userUID = useSelector(uid);
  const { id } = useParams();
  let navigate = useNavigate();

  const { loader, success, handlePostJob } = NewItemViewModel();

  const handleSubmit = () => {
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
    handlePostJob(data);
  };

  const handleDelete = () => {
    if (userUID) {
      API.deleteJob(id).then(() => {
        navigate("/", { replace: true });
      });
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

  useEffect(() => {
    if (!userUID) {
      navigate("/", { replace: true });
    }
    if (id) {
      fetchJobById(id);
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

        <Form.Group className="mb-3">
          <Form.Label>Area de atuação</Form.Label>
          <Form.Select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            size="sm"
          >
            <option></option>
            <option>Especialista</option>
            <option>Senior</option>
            <option>Pleno</option>
            <option>Junior</option>
            <option>Estágio</option>
          </Form.Select>
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

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Link da vaga</Form.Label>
          <Form.Control
            value={link}
            onChange={(e) => setLink(e.target.value)}
            type="text"
            placeholder="https://linkedin.com/vagaID"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descrição</Form.Label>
          <Form.Control
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            as="textarea"
            rows={3}
            placeholder="max-length 200 characters"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Cidade</Form.Label>
          <Form.Control
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            placeholder="Cidade"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>País</Form.Label>
          <Form.Control
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            type="text"
            placeholder="BR"
          />
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
