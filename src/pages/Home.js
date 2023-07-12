import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LatestNews from "../components/LatestNews";

import ArticleCards from "../components/ArticleCard";
import "../components/NewsList.scss";

const Home = () => {
  const [news, setNews] = useState([]);
  const apikey = "cggBDj3EwtAQatE8Y47R6YLGF3f5hACT";
  const search = "";

  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch(
        `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apikey}`
      );
      const json = await res.json();

      const filtered = json.results.filter((article) => {
        return (
          article &&
          article.title &&
          article.title.toLowerCase().includes(search)
        );
      });

      setNews(filtered);

      // console.log(filtered);
    };
    fetchNews();
  }, [search]);

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
          <NavLink to="/latest news" className="fav">
            Latest
          </NavLink>
        </div>
        <div className="news">
          <div className="latest-widget">
            <LatestNews />
          </div>
          {Object.entries(news).map(([key, article]) =>
            article.multimedia &&
            article.multimedia.length &&
            article.title.length > 0 ? (
              <ArticleCards
                key={key}
                img={article.multimedia[0].url}
                category={article.section}
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

export default Home;
