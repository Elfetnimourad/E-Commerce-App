import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase-coonfig";
import { SuccessSignUp } from "./SuccessSignUp";
import "./Login.css";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Header } from "./Header";

export const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordCon, setShowPasswordCon] = useState(false);

  const [error, setError] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [emailSignUp, setEmailSignUp] = useState("");

  const [passwordSignUp, setPasswordSignUp] = useState("");
  const [userNameSignUp, setUserNameSignUp] = useState("");

  const SignUpFunction = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        emailSignUp,
        passwordSignUp,
        userNameSignUp
      );
      console.log(user);
      setShowModel(true);
      // Successful sign-up, set showModel to true
    } catch (err) {
      console.log(err.message);
      setError(!error);
      alert(err.message);
      throw err.message;
    }
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#508bfc" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5 ">
            <div
              className={
                error
                  ? "card cardError shadow-2-strong w-100 car"
                  : "card shadow-2-strong w-100 car"
              }
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                <h3 className="mb-5">Sign in</h3>

                <form onSubmit={handleSubmit}>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="typeEmailX-2"
                      className="form-control form-control-lg"
                      placeholder="UserName"
                      onChange={(e) => {
                        setUserNameSignUp(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="typeEmailX-2"
                      className="form-control form-control-lg"
                      placeholder="Your Email"
                      onChange={(e) => {
                        setEmailSignUp(e.target.value);
                      }}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type={showPassword ? "password" : "text"}
                      id="typePasswordX-2"
                      className="form-control form-control-lg"
                      placeholder="Your Password"
                      onChange={(e) => {
                        setPasswordSignUp(e.target.value);
                      }}
                    />
                    {showPassword ? (
                      <VisibilityIcon
                        className="visibiltyStyle"
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    ) : (
                      <VisibilityOffIcon
                        className="visibiltyOffStyle"
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    )}
                  </div>

                  <div className="form-check d-flex justify-content-start mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                    />

                    <label className="form-check-label" htmlFor="form1Example3">
                      {" "}
                      Remember password{" "}
                    </label>
                  </div>
                  <button
                    className="btn btn-primary btn-lg btn-block ms-3 up"
                    type="submit"
                    onClick={SignUpFunction}
                  >
                    Sign Up
                  </button>
                  <Link to={"/SignUp"}>
                    <button
                      className="btn btn-primary btn-lg btn-block ms-3 back"
                      type="submit"
                    >
                      Back to Login
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SuccessSignUp
        open={showModel}
        userNameSignUp={userNameSignUp}
        setShowModel={setShowModel}
        className="SuccessSignUpMobile"
      />
    </section>
  );
};
