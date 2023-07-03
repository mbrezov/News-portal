import { NavLink } from "react-router-dom";
import ArticleCards from "../components/ArticleCard";

import "../components/NewsList.scss";

const Favorites = () => {
  const articles = Object.keys(localStorage).map((key, value) => {
    return {
      title: key,
      isFav: JSON.parse(localStorage.getItem(key)),
    };
  });

  console.log(articles);
  return (
    <div className="newslist-container">
      <div className="newslist-desktop-nav">
        <p>News</p>
        <NavLink to="/favorites" className="fav">
          Favorites
        </NavLink>
      </div>
      <div className="newslist-mobile-nav">
        <NavLink to="/" className="fav">
          Featured
        </NavLink>
        <NavLink to="/favorites" className="fav">
          Latest
        </NavLink>
      </div>
      <div className="news">
        {articles.map((article, key) => (
          <ArticleCards
            key={key}
            img={article.isFav[0].img}
            category={article.isFav[0].category}
            title={article.isFav[0].title}
            author={article.isFav[0].author}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
