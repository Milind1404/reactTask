import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

// import "./Login.css";

function Login() {
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [validmsg, setValidmsg] = useState("Looks Goods");

    useEffect(() => {
        if(JSON.parse(localStorage.getItem('login')) === true){
            navigate("/dashboard");
          }
      },[])
    
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
          
          event.stopPropagation();
            }
            if(email === JSON.parse(localStorage.getItem('email'))){
                if(pass === JSON.parse(localStorage.getItem('pass'))){
                    localStorage.setItem('login', true);
                   navigate("/dashboard");
                }
            } else{
                setValidmsg("Invalid User email & Password.");
            }
            setValidated(true);
        };
    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
          <Form.Group controlId="validationCustomUsername">
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
          </Row>
          <Row className="mb-3">
            <Form.Group controlId="validationCustom01">
              <Form.Control
                required
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                type="password"
                placeholder="Password"
              />
              <Form.Control.Feedback>{validmsg}</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button type="submit">Sign Up</Button>
        </Form>
    );

}

export default Login