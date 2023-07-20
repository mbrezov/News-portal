import { NavLink } from "react-router-dom";
import LatestNews from "../components/LatestNews";

import "../components/NewsList.scss";

const LatestNewsMobile = () => {
  return (
    <div className="newslist-container">
      <div className="newslist-mobile-nav">
        <NavLink to="/Home" className="fav">
          Featured
        </NavLink>
        <NavLink to="/latest news" className="fav">
          Latest
        </NavLink>
      </div>
      <div>
        <LatestNews />
      </div>
    </div>
  );
};

export default LatestNewsMobile;
