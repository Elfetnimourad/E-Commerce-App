import React, { useState } from "react";
import "./sign.css";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
import { SuccessSignUp } from "./SuccessSignUp";
import { auth } from "./Firebase-coonfig";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import {
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Header } from "./Header";

export const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    // Add your form submission logic here
  };

  const [showPassword, setShowPassword] = useState(false);
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const user = signInWithEmailAndPassword(auth, emailLogin, passwordLogin);
  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider).then(() => {
        console.log("Google here");
      });

      // If the sign-in is successful, you can handle it here
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };
  const signInWithFacebook = async () => {
    try {
      const providerFace = new FacebookAuthProvider();
      await signInWithPopup(auth, providerFace).then(() => {
        console.log("facebook here");
      });

      // If the sign-in is successful, you can handle it here
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };

  const logout = async () => {
    try {
      const user = await signOut(auth).then(() => {
        console.log("the user sign Out ");
      });
      console.log(user);
    } catch (err) {
      console.log(err.message);
    }
  };

  const loginFunction = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        emailLogin,
        passwordLogin
      );
      // Successful sign-up, set showModel to true
      console.log(user);
    } catch (err) {
      console.log(err.message);
      alert(err.message);
      throw err.message;
    }
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#508bfc" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card shadow-2-strong w-100 here"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                <h3 className="mb-5">Sign in</h3>

                <form onSubmit={handleSubmit}>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="typeEmailX-2"
                      className="form-control form-control-lg"
                      placeholder="Your Email"
                      onChange={(e) => {
                        setEmailLogin(e.target.value);
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
                        setPasswordLogin(e.target.value);
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
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                    onClick={loginFunction}
                  >
                    Login
                  </button>
                  <button
                    className="btn btn-primary btn-lg btn-block ms-2"
                    type="submit"
                    onClick={logout}
                  >
                    Logout
                  </button>
                  <Link to={"/login"}>
                    <button
                      className="btn btn-primary btn-lg btn-block ms-3 ssss"
                      type="submit"
                    >
                      <LoginIcon />
                      Sign Up
                    </button>
                  </Link>
                </form>

                <hr className="my-4" />

                <button
                  className="btn btn-lg btn-block btn-primary googlebtn"
                  style={{ backgroundColor: "#dd4b39" }}
                  type="submit"
                  onClick={signInWithGoogle}
                >
                  <GoogleIcon /> Sign in with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
