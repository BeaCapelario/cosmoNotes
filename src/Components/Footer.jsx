import React from "react";
import "./footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* Nova área de Informação com o Logo Mágico ✨ */}
        <div className="footer-info">
          <h2 className="footer-logo">cosmoNotes</h2>
          <p>
            &copy; {new Date().getFullYear()} cosmoNotes. Todos os direitos reservados.
          </p>
        </div>

        <div className="footer-socials">
          <a
            href="https://github.com/BeaCapelario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/beatriz-capelario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
