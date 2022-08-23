import React from "react";
import Linkedin from "../images/Linkedin.png";
import Facebook from "../images/Facebook.png";
import GitHub from "../images/GitHub.png";
import Instagram from "../images/Instagram.png";
import Twitter from "../images/Twitter.png";

function Footer() {
  return (
    <div className="footer">
      <a href="https://www.youtube.com/watch?v=bMknfKXIFA8t=8570s">
        <img src={Linkedin} alt="Linkedin Logo" />
      </a>
      <a href="https://www.youtube.com/watch?v=bMknfKXIFA8t=8570s">
        <img src={Facebook} alt="Facebook Logo" />
      </a>
      <a href="https://www.youtube.com/watch?v=bMknfKXIFA8t=8570s">
        <img src={GitHub} alt="GitHub Logo" />
      </a>
      <a href="https://www.youtube.com/watch?v=bMknfKXIFA8t=8570s">
        <img src={Instagram} alt="Instagram Logo" />
      </a>
      <a href="https://www.youtube.com/watch?v=bMknfKXIFA8t=8570s">
        <img src={Twitter} alt="Twitter Logo" />
      </a>
    </div>
  );
}

export default Footer;
