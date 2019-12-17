import React, { useRef } from "react";
import axios from "axios";

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
        props.history.push("/friends")
      })
      .catch(err => {
        alert(err.response.data.error);
      });
  };

  return (
    <form>
      <label htmlFor="username">Username</label>{" "}
      <input type="text" id="username" ref={usernameRef} /> <br />
      <label htmlFor="password">Password</label>{" "}
      <input type="password" id="password" ref={passwordRef} />
      <br />
      <button onClick={onSubmit}>Submit</button>
    </form>
  );
}
