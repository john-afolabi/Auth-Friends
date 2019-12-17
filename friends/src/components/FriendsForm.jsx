import React, { useRef } from "react";
import withAuth from "../axios";

export default function FriendsForm() {
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
      .then(res => {})
      .catch(err => {});
  };

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" ref={nameRefs} /> <br />
      <label htmlFor="age">Age</label>
      <input type="number" id="age" ref={ageRefs} /> <br />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" ref={emailRefs} />
      <br />
      <button onClick={onSubmit}>Submit</button>
    </form>
  );
}
