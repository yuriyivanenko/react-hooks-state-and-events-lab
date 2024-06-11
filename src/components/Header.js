import React from "react";

function Header({ onDarkModeClick, darkMode }) {
  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={onDarkModeClick}>{darkMode === true ? "Dark Mode" : "Light Mode"}</button>
    </header>
  );
}

export default Header;
