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

const Login = () => {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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
      <div>
        <h2>Login</h2>
        <form onSubmit={handleRegistration}>
          <input
            type="email"
            onBlur={handleEmailChange}
            name=""
            id=""
            placeholder="Your Email"
          />
          <br />
          <input
            type="email"
            onBlur={handleEmailChange}
            className="p-2 form-control w-25"
            placeholder="Email"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <input type="password" onBlur={handlePasswordChange} name="" />
          <br />
          <input type="submit" value="Submit" />
          <p>
            New here? <Link to="/register">Create Accout</Link>
          </p>
          <div>-------------or-----------</div>
          <button className="btn-regular" onClick={googleSignIn}>
            Google Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
