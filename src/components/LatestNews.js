import axios from "axios";
import { useEffect, useState } from "react";

import "./LatestNews.scss";

const LatestNews = () => {
  const [latestNews, setLatestNews] = useState([]);
  const apikey = "cggBDj3EwtAQatE8Y47R6YLGF3f5hACT";

  useEffect(() => {
    axios
      .get(
        `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${apikey}&offset=1`
      )
      .then((results) => {
        const fetchedData = results.data.results;
        setLatestNews(fetchedData);
        console.log(fetchedData);
      });
  }, []);

  return (
    <div className="latestnews-container">
      {Object.entries(latestNews).map(([key, article]) =>
        article.title.length > 0 ? (
          <div key={key}>
            <div>{article.published_date}</div>
            <div>{article.title}</div>
          </div>
        ) : null
      )}
    </div>
  );
};

export default LatestNews;
