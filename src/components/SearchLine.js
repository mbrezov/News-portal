import { useState } from "react";
import "./SearchLine.scss";
import { NavLink } from "react-router-dom";

const SearchLine = () => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    console.log("Performing search with value:", search);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  console.log(search);
  return (
    <div className="searchline-container">
      <div className="searchline-header">
        <NavLink to="/">
          My<span>News</span>
        </NavLink>
        <button className="mobile-menu">
          <svg
            width="24"
            height="20"
            viewBox="0 0 24 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="4" rx="1" fill="#1D1D1B" />
            <rect y="8" width="24" height="4" rx="1" fill="#1D1D1B" />
            <rect y="16" width="24" height="4" rx="1" fill="#1D1D1B" />
          </svg>
        </button>
      </div>
      <div className="search-container">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.5123 17.164L15.6439 13.2934C18.0842 9.63838 17.3555 4.72725 13.9592 1.93918C10.5628 -0.848885 5.6066 -0.604487 2.50071 2.50421C-0.605194 5.61291 -0.847705 10.5719 1.94003 13.9692C4.72777 17.3664 9.63647 18.0938 13.2886 15.6508L17.1571 19.5205C17.8122 20.1598 18.8573 20.1598 19.5123 19.5205C20.1626 18.8697 20.1626 17.8148 19.5123 17.164ZM8.54906 2.50996C11.8837 2.50996 14.587 5.21473 14.587 8.55123C14.587 11.8877 11.8837 14.5925 8.54906 14.5925C5.21438 14.5925 2.5111 11.8877 2.5111 8.55123C2.51477 5.21625 5.21591 2.51364 8.54906 2.50996Z"
            fill="#1D1D1B"
          />
        </svg>
        <input
          className="searchbar"
          type="search"
          placeholder="Search news"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button type="submit" className="searchbutton" onClick={handleSearch}>
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default SearchLine;
