import "./SearchLine.scss";

const SearchLine = () => {
  return (
    <div className="searchline-container">
      <div>MyNews</div>
      <input className="searchbar" type="search" placeholder="Search news" />
    </div>
  );
};

export default SearchLine;
