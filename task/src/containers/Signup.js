import React, { useState, useEffect } from "react";
// import { createBrowserHistory } from 'history';
// import { useHistory } from 'react-router-dom';
import { Routes, Route, useNavigate, useHistory } from "react-router-dom";
import Login from "./Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';


// import "./Login.css";

function Signup() {
    const navigate = useNavigate();
    // const history = useHistory();
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState();
    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [pass, setPass] = useState();
    const [cpass, setCpass] = useState();

    // useEffect(() => {
    //     console.log('data >> ', data);
    // localStorage.setItem('email', JSON.stringify(data));
    // }, [data]);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
        }

        setValidated(true);
        localStorage.setItem('email', JSON.stringify(email));
        localStorage.setItem('fname', JSON.stringify(fname));
        localStorage.setItem('lname', JSON.stringify(lname));
        localStorage.setItem('pass', JSON.stringify(pass));
        localStorage.setItem('cpass', JSON.stringify(cpass));
    };
    
    // createBrowserHistory();
    // const loginPage = () => {
    //     alert("Hi");
    //     history.push('/login');
    //     navigate('/Login.js', {replace: true});
    // };
    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        Already have an account?  <Button onClick={()=>navigate("/login")}>Log in</Button>
          <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Control
                required
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                type="text"
                placeholder="First name"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Control
                required
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                type="text"
                placeholder="Last name"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Control
                required
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                type="password"
                placeholder="Password"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Control
                required
                value={cpass}
                onChange={(e) => setCpass(e.target.value)}
                type="password"
                placeholder="Confirm Password"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button type="submit">Sign Up</Button>
        </Form>
      );

}

export default Signup