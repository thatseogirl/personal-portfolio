import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <p>Created by Arotimi Tobiloba</p>
      </div>
      <div className="footer__social">
        <a
          href="https://www.linkedin.com/in/tobiloba-arotimi/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="footer__social__favicon" />
        </a>
        <a
          href="https://github.com/thatseogirl"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="footer__social__favicon" />
        </a>
      </div>
    </footer>
  );
}
