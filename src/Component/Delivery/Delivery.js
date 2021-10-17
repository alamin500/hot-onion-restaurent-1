import React from "react";
import { FormControl, InputGroup, Button } from "react-bootstrap";

const Delivery = () => {
  return (
    <div id="delivery" className="container text-start p-4">
      <h1>Edit Delivery Details</h1>
      <hr className="w-50 h-10" />
      <div>
        <InputGroup className="mb-3 w-50">
          <FormControl
            placeholder="Door to delivery"
            aria-label="Default"
            className="bg-light"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <InputGroup className="mb-3 w-50">
          <FormControl
            placeholder="Flat or Floor"
            aria-label="Default"
            className="bg-light"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <InputGroup className="mb-3 w-50">
          <FormControl
            placeholder="Password"
            aria-label="Default"
            className="bg-light"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <InputGroup className="mb-3 w-50">
          <FormControl
            placeholder="Business Name"
            aria-label="Default"
            className="bg-light"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>

        <InputGroup className="mb-3 w-50">
          <FormControl
            as="textarea"
            aria-label="With textarea"
            placeholder="Add Delivery Instactor"
          />
        </InputGroup>
        <Button variant="danger" className="login-btn mb-3 w-50">
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default Delivery;
