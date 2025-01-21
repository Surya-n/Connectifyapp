import React, { useState } from "react";


const Search = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // You can handle the search functionality here
    console.log("Search for:", searchQuery);
  };

  return (
    <div className="search-modal">
      <div className="search-modal-content">
        <button className="close-button" onClick={onClose}>
          &times; {/* Close button */}
        </button>
        <h2>Search</h2>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
