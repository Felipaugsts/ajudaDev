import {  useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import './newItem.css'
import { useSelector } from 'react-redux'
import {  uid   } from '../../Model/userSlice'
import API  from '../../Model/API'
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom'

const NewItem = () => { 

    const [title, setTitle] = useState("")
    const [location, setLocation] = useState("")
    const [field, setField] = useState("")
    const [remote, setRemote] = useState(false)
    const [Tech, setTech] = useState("")
    const userUID = useSelector(uid)
    const { id } = useParams();
    const [loader, setLoader] = useState(false)
    const [success, setSuccess] = useState(false)
    let navigate = useNavigate();

    const handleSubmit = () => { 
        if (
            title &&
            location &&
            field &&
            Tech && 
            userUID
        ) { 
           if (userUID) {
            setLoader(true)
            let data = {
                "uid": userUID,
                "title": title,
                "location": location,
                "field": field,
                "remote": remote,
                "Tech": Tech,
                "created": new Date()
            }
            API.postCollection(data, id).then(() => {
                console.log("success")
                setLoader(false)
                setSuccess(true)
            }).catch((err) =>  { 
                console.log(err)
                setLoader(false)
            })
          }
        } else {
            alert("fields cannot be empty!")
        }
    }

    useEffect(() => { 
      if (!userUID) { 
        navigate("/", { replace: true })
      }
        if (id) {
            API.getJobId(id).then((data) => { 
                console.log(data)
                setTitle(data.title)
                setLocation(data.location)
                setField(data.field)
                setRemote(data.remote)
                setTech(data.Tech)
                
                console.log(title)
            })
        } 
    }, [id])

    return ( 
       <div className="newItem">
           

<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Title</Form.Label>
    <Form.Control value={title} onChange={(e) => setTitle( e.target.value)} type="text" placeholder="Enter Title" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Location</Form.Label>
    <Form.Control value={location} onChange={(e) => setLocation( e.target.value)} type="text" placeholder="Enter Location" />
  </Form.Group>

<Form.Group className="mb-3">
<Form.Label>Field</Form.Label>
<Form.Select value={field} onChange={(e) => setField( e.target.value)}  size="sm">
    <option></option>
    <option>Developer</option>
    <option>Design</option>
    <option>DevOps</option>
  </Form.Select>
</Form.Group>

<Form.Group className="mb-3">
<Form.Label>Technology</Form.Label>
<Form.Select value={Tech} onChange={(e) => setTech(e.target.value)}  size="sm">
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
    <Form.Check value={remote} onChange={(e) => setRemote(!remote)} type="checkbox" label="Remote?" />
  </Form.Group>
  <Button onClick={handleSubmit} variant={`${loader ? '' : success ? 'success' : 'primary'}`}>
    { 
    !loader ? ( 
        success ? 'success' : 'Submit'
    ) : ( 
        'loading ...'
    )
    }
    
  </Button>
</Form>
       </div>
    )
}
export default NewItem