import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { SearchContext } from "../context/SearchContextProvider";
import LatestNews from "../components/LatestNews";
import ArticleCards from "../components/ArticleCard";
import "../components/NewsList.scss";

const Home = () => {
  const [news, setNews] = useState([]);
  const apikey = "cggBDj3EwtAQatE8Y47R6YLGF3f5hACT";
  const { articleSearch } = useContext(SearchContext);

  console.log(articleSearch);

  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch(
        `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apikey}`
      );
      const json = await res.json();
      setNews(json.results);
    };
    fetchNews();
  }, []);

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
            article.title.length > 0 &&
            article.title.toLowerCase().includes(articleSearch) ? (
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
