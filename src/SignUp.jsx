import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonPrimary from "./components/ui/ButtonPrimary";
import ButtonSecondary from "./components/ui/ButtonSecondary";
import { useDispatch } from "react-redux";
import { auth, db } from "./firebase";
import { login } from "./features/userSlice";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  removeDoc,
  deleteDoc,
} from "firebase/firestore";
import "firebase/auth";
import "firebase/firestore";

function SignUp({
  email,
  setEmail,
  password,
  setPassword,
  firstName,
  setFirstName,
  lastName,
  setLastName,
}) {
  const navigate = useNavigate();

  const userData = {
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
  };

  function signUp(e) {
    e.preventDefault();
    addDoc(collection(db, "posts"), userData);
    register();
  }

  function register() {
    console.log(email);
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        navigate("/login");
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  return (
    <div className="signUp">
      <div className="signUp__header">
        <div className="signUp__logo">
          <Link>
            <img
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt=""
            />
          </Link>
        </div>
        <div className="signUp__language">
          <FontAwesomeIcon icon="fa-globe" />
          <span>en-US</span>
        </div>
      </div>
      <div className="signUp__info">
        <h1>Sign Up</h1>
        <form className="signUp__form">
          <label>First Name</label>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonPrimary name="Create account" type="submit" onClick={signUp} />
        </form>
        <div className="signUp__divider">
          <hr /> <span>OR</span> <hr />
        </div>
        <Link to="/login">
          <ButtonSecondary name="Sign In" type="submit" />
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
