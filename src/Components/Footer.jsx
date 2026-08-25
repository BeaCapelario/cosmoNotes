import React, { useState } from "react";
import "./footer.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} CosmoNotes. Todos os direitos
          reservados.
        </p>
        <div className="footer-socials">
          <a
            href="https://github.com/BeaCapelario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub">
            <FaGithub size={22} />
          </a>
          <a
            href="https://linkedin.com/in/beatriz-capelario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn">
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
