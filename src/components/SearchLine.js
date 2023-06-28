import "./SearchLine.scss";

const SearchLine = () => {
  return (
    <div className="searchline-container">
      <div>
        My<span>News</span>
      </div>
      <input className="searchbar" type="search" placeholder="Search news" />
      <button type="submit">
        <i className="searchbar-button"></i>
      </button>
    </div>
  );
};

export default SearchLine;
