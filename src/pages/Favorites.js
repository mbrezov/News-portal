import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FavContext } from "../context/FavArticleContext";
import { SearchContext } from "../context/SearchContextProvider";
import ArticleCards from "../components/ArticleCard";
import "../components/NewsList.scss";

const Favorites = () => {
  const { favArticles } = useContext(FavContext);
  const { articleSearch } = useContext(SearchContext);

  return (
    <div className="newslist-container">
      <div className="newslist-desktop-nav">
        <NavLink to="/" className="all-news">
          News
        </NavLink>
        <NavLink to="/favorites" className="fav">
          Favorites
        </NavLink>
      </div>
      <div className="newslist-mobile-nav">
        <NavLink to="/" className="fav">
          Featured
        </NavLink>
        <NavLink to="/latest news" className="fav">
          Latest
        </NavLink>
      </div>
      {favArticles.length > 0 ? (
        <div className="news">
          {favArticles.map((article, key) =>
            article.title.toLowerCase().includes(articleSearch) ? (
              <ArticleCards
                key={key}
                img={article.img}
                category={article.category}
                title={article.title}
                author={article.author}
              />
            ) : null
          )}
        </div>
      ) : (
        <div className="no-news">
          No <span>news</span> available <span>:(</span>
        </div>
      )}
    </div>
  );
};

export default Favorites;
