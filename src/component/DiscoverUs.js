import React, { useContext } from "react";
import "./disc.css";
import { Header } from "./Header";
import themeContext from "./Contextc";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export const DiscoverUs = () => {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="cardb w-100 h-100">
          <div className="row">
            <div className="col-5 p-4 discText">
              <h1>About Us</h1>
              <div className="company-info">
                <p>
                  We are your go-to destination for high-quality and stylish
                  clothing. At ElfShopp, we believe in providing the best
                  shopping experience for our customers.
                </p>
              </div>

              <div className="mission-values">
                <h3>Our Mission</h3>
                <p>
                  Our mission is to produce the best products with good sales.
                  We aim to bring you the latest trends while ensuring the
                  highest quality and ethical sourcing of our products.
                </p>

                <h3>Our Values</h3>
                <ul>
                  <li>Quality</li>
                  <li>Integrity</li>
                  <li>Customer Satisfaction</li>
                  {/* Add more values as needed */}
                </ul>
              </div>
              <div className="contact-form">
                <h3>Contact Us</h3>
                <p>
                  Have any questions or suggestions? Feel free to reach out to
                  us using the form below.
                </p>

                <a href="mailto:moradtao2000@email.com">
                  <EmailIcon />
                </a>
                <a
                  className="ms-2"
                  href="https://www.facebook.com"
                  target="_blank"
                >
                  <FacebookIcon />
                </a>
                <a
                  className="ms-2"
                  href="https://www.instagram.com/elfetnimourad/"
                  target="_blank"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>
            <div className="col-7 float-right">
              <img
                className="imageShopp"
                src="https://s3.envato.com/files/433454890/IMG_5200%203.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
