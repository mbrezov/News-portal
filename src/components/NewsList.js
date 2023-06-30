import { useState, useEffect } from "react";

import ArticleCards from "./ArticleCard";
import "./NewsList.scss";

const NewsList = (props) => {
  const [news, setNews] = useState([]);
  const [section, setSection] = useState([]);

  const key = "cggBDj3EwtAQatE8Y47R6YLGF3f5hACT";

  const topic = props.category;

  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch(
        `https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=${key}`
      );
      const json = await res.json();

      setNews(json.results);
      setSection(json.section);
      console.log(json.results);
      console.log(json.section);
    };
    fetchNews();
  }, [topic]);

  return (
    <div className="newslist-container">
      <p>News</p>
      <div className="news">
        {Object.entries(news).map(([key, article]) => (
          <ArticleCards
            key={key}
            img={article.multimedia[0]?.url}
            category={section}
            title={article.title}
            author={article.byline}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsList;
