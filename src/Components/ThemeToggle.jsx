import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="hover-link theme-toggle-btn"
      aria-label={isDark ? "Ativar Modo Claro" : "Ativar Modo Cósmico"}
      title={isDark ? "Modo Claro" : "Modo Cósmico"}
    >
      <span className="icon-wrapper">
        {isDark ? <FaSun /> : <FaMoon />}
      </span>
      <span className="text-wrapper">
        {isDark ? "Claro" : "Cósmico"}
      </span>
    </button>
  );
}
