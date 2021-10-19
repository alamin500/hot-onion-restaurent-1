import React, { useState } from "react";

import "./Login.css";

import useFirebase from "../../../hooks/useFirebase";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  signInWithEmailAndPassword,
  updateProfile,
} from "@firebase/auth";
import Button from "@restart/ui/esm/Button";
import { Modal } from "react-bootstrap";

const Login = () => {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then((result) => {
      console.log(result);
    });
  };
  const handleRegistration = (e) => {
    e.preventDefault();
    console.log(email, password);
    if (password.length < 6) {
      setError("password 6 ta hote hobe");
      return;
    } else {
      processLogin(email, password);
    }
  };

  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const { googleSignIn } = useFirebase();
  return (
    <div className="login-form">
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {/* --------------------- */}
      <div>
        <h2>Login</h2>
        <form onSubmit={handleRegistration}>
          <br />
          <input
            type="email"
            onBlur={handleEmailChange}
            className="p-2 form-control w-25"
            placeholder="Email"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <br />
          <input
            type="Password"
            onBlur={handlePasswordChange}
            className="p-2 form-control w-25"
            placeholder="Password"
            aria-label="Password"
            aria-describedby="basic-addon1"
          />

          <br />
          <Button type="submit" value="Submit" className="btn w-25 btn-primary">
            Log In
          </Button>
          <br />
          <br />
          <p>
            Don’t have an account?{" "}
            <Link className="google-btn" to="/register">
              Create Accout
            </Link>
          </p>
          <br />
          <button className="btn w-25 btn-danger" onClick={googleSignIn}>
            Google Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
