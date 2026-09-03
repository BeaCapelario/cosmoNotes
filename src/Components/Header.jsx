import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome , FaBook } from "react-icons/fa";
import { FaPenToSquare, FaCircleQuestion } from "react-icons/fa6";
import "./header.css";

function Header() {
  return (
    <header className="header-container">
      <div className="logo">cosmoNotes</div>
      <nav className="nav-links">
        <Link to="/" className="hover-link" aria-label="Início">
          <span className="icon-wrapper">
            <FaHome />
          </span>
          <span className="text-wrapper">Inicio</span>
        </Link>

        <Link to="/dicionario" className="hover-link" aria-label="Dicionário">
          <span className="icon-wrapper">
            <FaBook />
          </span>
          <span className="text-wrapper">Dicionário</span>
        </Link>

        <Link to="/quiz" className="hover-link" aria-label="Exercicios">
          <span className="icon-wrapper">
            <FaPenToSquare />
          </span>
          <span className="text-wrapper">Fixação</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
