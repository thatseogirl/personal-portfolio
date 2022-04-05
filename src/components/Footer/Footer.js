import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <p>Created by Arotimi Tobiloba| © 2022 All rights reserved.</p>
      </div>
      <div className="footer__social">
        <FaLinkedin
          className="footer__social__favicon"
          href="https://www.linkedin.com/in/tobiloba-arotimi/"
        />
        <FaGithub
          className="footer__social__favicon"
          href="https://github.com/thatseogirl"
        />
      </div>
    </footer>
  );
}
