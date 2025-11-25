import React from "react";

export default function Navbar({ darkMode, toggleDark }) {
  return (
    <nav className={`navbar ${darkMode ? "dark" : ""}`}>
      <h2>Dish Dashboard</h2>
      <button className="toggle-btn" onClick={toggleDark}>
        {
        darkMode ? " Light Mode" : " Dark Mode"
        }
      </button>
    </nav>
  );
}
