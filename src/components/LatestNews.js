import axios from "axios";
import { useEffect, useState } from "react";

import "./LatestNews.scss";

const LatestNews = () => {
  const [latestNews, setLatestNews] = useState([]);
  const [offset, setOffset] = useState(0);
  const apikey = "cggBDj3EwtAQatE8Y47R6YLGF3f5hACT";

  useEffect(() => {
    axios
      .get(
        `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${apikey}&offset=${offset}`
      )
      .then((results) => {
        const fetchedData = results.data.results;
        setLatestNews((prev) => [...prev, ...fetchedData]);
      });
  }, [offset]);

  useEffect(() => {
    const container = document.getElementById("latestnews-container");

    const handleScroll = () => {
      const scrollHeight = container.scrollHeight;
      const currentHeight = container.offsetHeight + container.scrollTop;

      if (currentHeight + 1 >= scrollHeight) {
        setOffset((prevOffset) => prevOffset + 10);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="latestnews-container" id="latestnews-container">
      <div className="latest-news-header">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle opacity="0.24" cx="10" cy="10" r="10" fill="#BB1E1E" />
          <circle cx="10" cy="10" r="5" fill="#BB1E1E" />
        </svg>
        <p>Latest News</p>
      </div>
      {Object.entries(latestNews).map(([key, article]) =>
        article.title.length > 0 ? (
          <div className="latest-news-article-container" key={key}>
            <div className="latest-news-date">
              {article.published_date.substring(11, 16)}
            </div>
            <div className="latest-news-title">{article.title}</div>
          </div>
        ) : null
      )}
      <div className="latest-news-footer">
        <p>See all news</p>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.48025 0.451931C4.30001 0.271689 4.00778 0.271689 3.82754 0.451931L3.338 0.941467C3.15776 1.12171 3.15776 1.41394 3.338 1.59418L7.66256 5.91874C7.70762 5.9638 7.70762 6.03686 7.66256 6.08192L3.33833 10.4061C3.15809 10.5864 3.15809 10.8786 3.33833 11.0589L3.82754 11.5481C4.00778 11.7283 4.30001 11.7283 4.48025 11.5481L9.37561 6.65271C9.73609 6.29223 9.73609 5.70777 9.37561 5.34729L4.48025 0.451931Z"
            fill="#1D1D1B"
          />
        </svg>
      </div>
    </div>
  );
};

export default LatestNews;
