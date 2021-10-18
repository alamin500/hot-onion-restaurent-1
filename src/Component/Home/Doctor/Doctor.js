import React from "react";
import "./Doctor.css";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const Doctor = ({ doctor }) => {
  const { name, img, describe } = doctor;
  console.log(doctor);
  return (
    <div className="col-12 col-sm-6 col-lg-3">
      <Card style={{ width: "18rem" }} className="doctor">
        <Card.Img variant="top" src={img} className="doctor-img" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{describe}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{describe}</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Doctor;
