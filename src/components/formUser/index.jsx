
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'

const baseURL = "http://localhost:8080"

const FormUser = () => {

  const [formValue, setFormValue] = useState({
    name: "",
    email: ""
  })
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    fetch(`${baseURL}/user`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify({
      name: formValue.name,
      email: formValue.email
      })
  })
  .then(res => res.json())
  .then(res => console.log(res));
  console.log(JSON.stringify({
    name: formValue.name,
    email: formValue.email
    }))
  }
  
  const handleChange = ({ target }) => {
    console.log(target)
    const { name, value } = target
    setFormValue({
      ...formValue,
      [name]: value,
    })
    
  }
  
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Name</Form.Label>
        <Form.Control
          placeholder="Enter name"
          name='name'
          value={formValue.name}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
          type="email"
          placeholder="Enter email"
          name='email'
          value={formValue.email}
          onChange={handleChange} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}

export default FormUser; 