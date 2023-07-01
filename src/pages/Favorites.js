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
      <p>News</p>
      <NavLink to="/favorites" className="fav">
        Favorites
      </NavLink>
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
