import { useState, useEffect } from "react";
import axios from "axios";

import ArticleCards from "./ArticleCard";
import "./NewsList.scss";

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=mma&apiKey=9ae6fe1553854303a30e81bb82105309`
      )
      .then((res) => {
        const response = res.data.articles;
        setNews(response);
        console.log(response);
      });
  }, []);

  return (
    <div className="newslist-container">
      <p>News</p>
      <div className="news">
        {Object.entries(news).map(([key, article]) => (
          <ArticleCards
            key={key}
            img={article.urlToImage}
            title={article.title}
            author={article.author}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsList;
