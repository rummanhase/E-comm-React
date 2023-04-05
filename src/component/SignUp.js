import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {

    const navigate = useNavigate();

    const [formData , setFormData] = useState({
        name:'',
        email:'',
        password:''
    })

    const formUpdate = (e , propName) =>{
        setFormData(pre=>({
            ...pre,
            [propName]:e.target.value
        }))
    }

    const submitForm =async (e)=>{
        e.preventDefault();
        console.log(formData);
        let {name , email , password} = formData;
        let result = await fetch('http://localhost:8005/user' , {
          method:'post' , 
          body : JSON.stringify({name , email , password}) , 
          headers : {
              'content-type' : 'application/json'
          }
        })
        result = await result.json();
        localStorage.setItem('user' , JSON.stringify(result))
        console.log(result)
        navigate('/')
    }

  return (
    <Form className='my-form' onSubmit={e=>submitForm(e)}>
        <h1>Sign Up Form</h1>
        <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" onChange={e=>formUpdate(e , 'name')}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={e=>formUpdate(e , 'email')}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={e=>formUpdate(e , 'password')}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default SignUp;