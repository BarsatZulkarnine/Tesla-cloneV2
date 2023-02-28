import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Menu from "./components/Menu";
import HeaderBlock from "./components/HeaderBlock";
import Login from "./Login";
import SignUp from "./SignUp";
import TeslaAccount from "./TeslaAccount";
import TestPage from "./testPage";
import Banner from "./components/Banner";
import "firebase/auth";
import "firebase/firestore";

function App() {
  // const [user, setUser] = useState({});
  const user = false;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                {isMenuOpen && <Menu />}
                <HeaderBlock />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                {user ? (
                  <Navigate to="/teslaaccount" />
                ) : (
                  <Login
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                  />
                )}
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <SignUp
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                firstName={firstName}
                setFirstName={setFirstName}
                lastName={lastName}
                setLastName={setLastName}
              />
            }
          />
          <Route
            path="/teslaaccount"
            element={
              <>
                {user ? (
                  <Navigate to="/login" />
                ) : (
                  <>
                    <TeslaAccount
                      isMenuOpen={isMenuOpen}
                      setIsMenuOpen={setIsMenuOpen}
                    />
                    {isMenuOpen && <Menu />}
                  </>
                )}
              </>
            }
          />
          <Route path="/testpage" element={<TestPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
