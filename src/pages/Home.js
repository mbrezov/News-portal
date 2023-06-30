import { useState, useEffect } from "react";
import ArticleCards from "../components/ArticleCard";

import "./Homepage.scss";

const Home = () => {
  const sections = [
    "arts",
    "automobiles",
    "business",
    "fashion",
    "food",
    "health",
    "insider",
    "magazine",
    "movies",
    "nyregion",
    "obituaries",
    "opinion",
    "politics",
    "realestate",
    "science",
    "sports",
    "sundayreview",
    "technology",
    "theater",
    "t-magazine",
    "travel",
    "upshot",
    "us",
    "world",
  ];

  const [featuredArticles, setFeaturedArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const key = "cggBDj3EwtAQatE8Y47R6YLGF3f5hACT";

        const requests = sections.map(async (section) => {
          const response = await fetch(
            `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${key}`
          );
          const data = await response.json();

          // Extract the top story from the response
          const topArticleas = data?.results[0];

          return {
            section: section,
            topArticleas: topArticleas,
          };
        });

        const results = await Promise.all(requests);
        setFeaturedArticles(results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchArticles();
  }, [sections]);

  console.log(featuredArticles);

  return (
    <div className="newslist-container">
      <p>News</p>
      <div className="news">
        {Object.entries(featuredArticles).map(([key, article]) =>
          article.topArticleas.multimedia &&
          article.topArticleas.multimedia.length &&
          article.topArticleas.title.length > 0 ? (
            <ArticleCards
              key={key}
              category={article.section}
              img={article.topArticleas.multimedia[0].url}
              title={article.topArticleas.title}
              author={article.topArticleas.byline}
            />
          ) : null
        )}
      </div>
    </div>
  );
};

export default Home;
