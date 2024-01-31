import React from "react";
import "./Hero.css";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
export const Hero = () => {
  return (
    <>
      <div className="hero-text">
        <h1 className="pub text-center">
          <Typewriter
            options={{
              strings: ["Hello!", "Welcome to Our World!"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <h2 className="shopphere p-3">Go Shopp Here </h2>
        <h4 className="see p-3">See Below & Get The Best Product</h4>
        <button type="button" class="btn btn-secondary btnStyle">
          <Link to="/DicoverUs" className="p-5 fw-bolder text-center linkit">
            <span className="disc">Discover Us</span>
          </Link>
        </button>
      </div>
      <img
        className="image"
        src="https://t3.ftcdn.net/jpg/02/64/92/28/360_F_264922838_NErJEovZiP9MTa49apqL1Vs3f88ZT8Dg.jpg"
        alt=""
      />
    </>
  );
};
