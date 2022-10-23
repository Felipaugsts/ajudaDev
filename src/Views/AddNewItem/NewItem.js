import { useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import "./newItem.css";
import { NewItemViewModel } from "./NewItemViewModel";

const NewItem = () => {
  const { params, verifyUserID } = NewItemViewModel();

  useEffect(() => {
    verifyUserID();
  }, [params.id]);

  return (
    <div className="newItem">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Título</Form.Label>
          <Form.Control
            value={params.title}
            onChange={params.setJobTitle}
            type="text"
            placeholder="Título"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Area de atuação</Form.Label>
          <Form.Select
            value={params.level}
            onChange={params.setSeniority}
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
            value={params.field}
            onChange={params.setJobField}
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
            value={params.Tech}
            onChange={params.setTechnology}
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
            value={params.link}
            onChange={params.setJobLink}
            type="text"
            placeholder="https://linkedin.com/vagaID"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descrição</Form.Label>
          <Form.Control
            value={params.description}
            onChange={params.setJobDescription}
            as="textarea"
            rows={3}
            placeholder="max-length 200 characters"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Cidade</Form.Label>
          <Form.Control
            value={params.location}
            onChange={params.setJobLocation}
            type="text"
            placeholder="Cidade"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>País</Form.Label>
          <Form.Control
            value={params.country}
            onChange={params.setJobCountry}
            type="text"
            placeholder="BR"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            value={params.remote}
            onChange={params.setJobRemote}
            type="checkbox"
            label="Remoto?"
          />
        </Form.Group>

        <Button
          onClick={params.handlePostJob}
          variant={`${
            params.loader ? "" : params.success ? "success" : "primary"
          }`}
        >
          {!params.loader
            ? params.success
              ? "success"
              : "Submit"
            : "loading ..."}
        </Button>
        {params.id ? (
          <Button onClick={params.handleDelete} className="danger">
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
