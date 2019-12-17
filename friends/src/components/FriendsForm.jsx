import React, { useRef } from "react";
import withAuth from "../axios";
import { withRouter } from "react-router-dom";
import { Button, Form, Label } from "reactstrap";

export function FriendsForm(props) {
  const nameRefs = useRef();
  const ageRefs = useRef();
  const emailRefs = useRef();

  const onSubmit = event => {
    event.preventDefault();
    withAuth()
      .post("http://localhost:5000/api/friends", {
        name: nameRefs.current.value,
        age: ageRefs.current.value,
        email: emailRefs.current.value
      })
      .then(res => {
        props.setFriends(res.data);
      })
      .catch(err => {
        alert(err.message);
      });
  };

  return (
    <Form className="mt-4">
      <Label htmlFor="name">Name</Label>
      <input className="form-control" type="text" id="name" ref={nameRefs} />
      <Label htmlFor="age">Age</Label>
      <input className="form-control" type="number" id="age" ref={ageRefs} />
      <Label htmlFor="email">Email</Label>
      <input className="form-control" type="email" id="email" ref={emailRefs} />
      <Button className="mt-2" onClick={onSubmit}>
        Submit
      </Button>
    </Form>
  );
}

export default withRouter(FriendsForm);
