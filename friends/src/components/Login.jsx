import React, { useRef } from "react";
import axios from "axios";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Container
} from "reactstrap";

export default function Login(props) {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const onSubmit = event => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/login", {
        username: usernameRef.current.value,
        password: passwordRef.current.value
      })
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/friends");
      })
      .catch(err => {
        alert(err.response.data.error);
      });
  };

  return (
    <Container>
      <Form className="mt-4">
        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <input
            className="form-control"
            type="text"
            id="username"
            ref={usernameRef}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <input
            className="form-control"
            type="password"
            id="password"
            ref={passwordRef}
          />
        </FormGroup>
        <Button onClick={onSubmit}>Submit</Button>
      </Form>
    </Container>
  );
}
