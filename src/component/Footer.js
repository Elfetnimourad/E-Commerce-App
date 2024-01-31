import React from "react";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export const Footer = () => {
  return (
    <footer>
      <div className="footer" data-testid="Footer">
        <h4 className="created">Created by: Elfetni Mourad &copy;2023</h4>

        <img
          className="imageFooter img-fluid"
          src="https://play-lh.googleusercontent.com/2QEKcIOLIO9HRoL6lWIVFEY_Y07oW1_5Zk0vvEHym1Wsxzhdjf0mJ6eMG8QBs66c0S8"
          alt=""
        />
        <div className="list-link container d-flex justify-content-end align-items-end ">
          <ul className="d-flex flex-row socialMediaIcons">
            <li>
              <a href="https://www.facebook.com" target="_blank">
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href="https://github.com/ElfetniMourad/" target="_blank">
                <GitHubIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/elfetni-mourad-75168
          9b"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/elfetnimourad/"
                target="_blank"
              >
                <InstagramIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
