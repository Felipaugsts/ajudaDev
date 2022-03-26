import {  useState } from 'react'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import { db } from '../../Model/FirebaseSetup'
import './newItem.css'
import { useSelector } from 'react-redux'
import {  uid   } from '../../Model/userSlice'

const NewItem = () => { 

    const [title, setTitle] = useState("")
    const [location, setLocation] = useState("")
    const [field, setField] = useState("")
    const [remote, setRemote] = useState(false)
    const [Tech, setTech] = useState("")
    const userUID = useSelector(uid)

    const handleSubmit = () => { 
        console.log("click")
        console.log(title)
        console.log(location)
        console.log(field)
        console.log(remote)
        console.log(Tech)
        if (
            title &&
            location &&
            field &&
            Tech && 
            userUID
        ) { 
            console.log("started")
            // let ref = db.collection("Jobs").doc()
            db.collection("Jobs").doc().set({
                "uid": userUID,
                "title": title,
                "location": location,
                "field": field,
                "remote": remote,
                "Tech": Tech,
                "created": new Date()
            }).then((res) => { 
                console.log(res)
            })

        } else {
            alert("fields cannot be empty!")
        }
    }

    return ( 
       <div className="newItem">

<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Title</Form.Label>
    <Form.Control onChange={(e) => setTitle( e.target.value)} type="text" placeholder="Enter Title" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Location</Form.Label>
    <Form.Control onChange={(e) => setLocation( e.target.value)} type="text" placeholder="Enter Location" />
  </Form.Group>

<Form.Group className="mb-3">
<Form.Label>Field</Form.Label>
<Form.Select onChange={(e) => setField( e.target.value)}  size="sm">
    <option></option>
    <option>Developer</option>
    <option>Design</option>
    <option>DevOps</option>
  </Form.Select>
</Form.Group>

<Form.Group className="mb-3">
<Form.Label>Technology</Form.Label>
<Form.Select onChange={(e) => setTech(e.target.value)}  size="sm">
    <option></option>
    <option>Java</option>
    <option>Python</option>
    <option>React</option>
    <option>iOS</option>
    <option>Android</option>
    <option>Vue.js</option>
    <option>Angular</option>
    <option>Power BI</option>
    <option>Design UI</option>
    <option>.NET</option>
    <option>PHP</option>
    <option>Other</option>
  </Form.Select>
</Form.Group>


  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check onChange={(e) => setRemote(!remote)} type="checkbox" label="Remote?" />
  </Form.Group>
  <Button onClick={handleSubmit} variant="primary">
    Submit
  </Button>
</Form>
       </div>
    )
}
export default NewItem