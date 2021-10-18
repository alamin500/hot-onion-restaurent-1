import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  signInWithEmailAndPassword,
  updateProfile,
} from "@firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const auth = getAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
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
      createNewUser(email, password);
    }
  };

  const createNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        verifyEmail();
        setUserName();
      })
      .catch((error) => {
        setError(error.message);
      });
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
  return (
    <div className="register-form">
      <div>
        <h2>Register: Create Accout</h2>
        <form onSubmit={handleRegistration}>
          <input
            type="text"
            onBlur={handleNameChange}
            placeholder="Your Name"
          />
          <input
            type="email"
            onBlur={handleEmailChange}
            name=""
            placeholder="Your Email"
            required
          />
          <br />
          <input
            type="password"
            onBlur={handlePasswordChange}
            placeholder="Re-enter Password"
            required
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <p>
          Already have an Accout?{" "}
          <Link to="/Login">
            <div className="btn-regular">Google Sign In</div>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
