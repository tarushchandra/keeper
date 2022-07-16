import React from "react";

const Header = ({ onSearch, toggleTheme }) => {
  function handleChange(event) {
    onSearch(event.target.value);
  }

  return (
    <header>
      <h1>Keeper</h1>
      <div>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Search your Notes..."
        />
      </div>
      <i onClick={toggleTheme} className="fa-solid fa-moon moon-icon"></i>
    </header>
  );
};

export default Header;
