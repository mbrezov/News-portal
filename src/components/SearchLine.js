import "./SearchLine.scss";
import { NavLink } from "react-router-dom";

const SearchLine = () => {
  return (
    <div className="searchline-container">
      <NavLink to="/">
        My<span>News</span>
      </NavLink>
      <input className="searchbar" type="search" placeholder="Search news" />
      <button type="submit">
        <i className="searchbar-button"></i>
      </button>
    </div>
  );
};

export default SearchLine;
