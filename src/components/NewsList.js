import { useState, useEffect } from "react";
import axios from "axios";

import ArticleCards from "./ArticleCard";

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=keyword&apiKey=9ae6fe1553854303a30e81bb82105309`
      )
      .then((res) => {
        const response = res.data.articles;
        setNews(response);
        console.log(response);
      });
  }, []);

  return (
    <>
      <h2>News</h2>
      {Object.entries(news).map(([key, article]) => (
        <ArticleCards
          key={key}
          img={article.urlToImage}
          title={article.title}
          author={article.author}
        />
      ))}
    </>
  );
};

export default NewsList;
