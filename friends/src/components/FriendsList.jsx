import React, { useState, useEffect } from "react";
import withAuth from "../axios";
import FriendsForm from "./FriendsForm";

export default function FriendsList() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    withAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => {
        alert(err.message);
      });
  }, []);

  return (
    <div>
      {friends.map(friend => {
        return (
          <div key={friend.id}>
            <p>{friend.name}</p>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
          </div>
        );
      })}
      <FriendsForm />
    </div>
  );
}
