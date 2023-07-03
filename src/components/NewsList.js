import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import ArticleCards from "./ArticleCard";
import "./NewsList.scss";

const NewsList = (props) => {
  const [news, setNews] = useState([]);
  const apikey = "cggBDj3EwtAQatE8Y47R6YLGF3f5hACT";
  const section = props.category;

  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch(
        `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apikey}`
      );
      const json = await res.json();

      setNews(json.results);

      console.log(json.results);
    };
    fetchNews();
  }, [section]);

  return (
    <div>
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
          <NavLink to="/favorites" className="fav">
            Latest
          </NavLink>
        </div>
        <div className="news">
          {Object.entries(news).map(([key, article]) =>
            article.multimedia &&
            article.multimedia.length &&
            article.title.length > 0 ? (
              <ArticleCards
                key={key}
                img={article.multimedia[0].url}
                category={section === "home" ? article.section : section}
                title={article.title}
                author={article.byline}
              />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsList;
