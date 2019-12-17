import React, { useState, useEffect } from "react";
import withAuth from "../axios";
import FriendsForm from "./FriendsForm";
import { Container, Card, CardBody, CardText, Button } from "reactstrap";

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

  const deleteFriend = id => {
    withAuth()
      .delete(`http://localhost:5000/api/friends/${id}`)
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => {
        alert(err.message);
      });
  };

  return (
    <Container>
      <h1>List of Friends</h1>
      {friends.map(friend => {
        return (
          <Card key={friend.id} className="mt-3">
            <CardBody>
              <CardText>Name: {friend.name}</CardText>
              <CardText>Age: {friend.age}</CardText>
              <CardText>Email: {friend.email}</CardText>
              <Button
                color="danger"
                onClick={e => {
                  deleteFriend(friend.id);
                }}
              >
                Delete
              </Button>
            </CardBody>
          </Card>
        );
      })}
      <FriendsForm />
    </Container>
  );
}
