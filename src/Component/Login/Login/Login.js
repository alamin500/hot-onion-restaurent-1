import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import "./Login.css";
import img from "../../../images/logo2.png";

import useFirebase from "../../../hooks/useFirebase";

const Login = () => {
  const { googleSignIn } = useFirebase();
  return (
    <div className="container">
      <div>
        <img className="w-25 login-img" src={img} alt="" />
      </div>
      <div>
        <InputGroup className="mb-3 w-50">
          <FormControl
            placeholder="Name"
            aria-label="Default"
            className="bg-light"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <InputGroup className="mb-3 w-50">
          <FormControl
            placeholder="Email"
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
            placeholder="Confirm Password"
            aria-label="Default"
            className="bg-light"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <Button
          onClick={googleSignIn}
          variant="danger"
          className="login-btn mb-3 w-50"
        >
          Google Sign In
        </Button>
      </div>
    </div>
  );
};

export default Login;
