import React from "react";

function Content() {
  return (
    <div className="Content">
      <div className="content-head">
        <h3 className="name">Laura Smith</h3>
        <p className="profession">Frontend Developer</p>
        <a
          className="personal-website"
          href="https://www.youtube.com/watch?v=bMknfKXIFA8t=8570s"
          target="_blank"
          rel="noreferrer"
        >
          lauresmith.website
        </a>
        <a
          className="mail-btn"
          href="https://www.youtube.com/watch?v=bMknfKXIFA8t=8570s"
        >
          Email
        </a>
      </div>
      <div className="about">
        <h3>About</h3>
        <p>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
      </div>

      <div className="interests">
        <h3>Interests</h3>
        <p>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </div>
  );
}

export default Content;
