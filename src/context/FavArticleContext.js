import { createContext, useState, useEffect } from "react";
export const FavContext = createContext();

function getFavArticles() {
  const storedFavArticles = localStorage.getItem("favArticles");
  return storedFavArticles ? JSON.parse(storedFavArticles) : [];
}

const FavContextProvider = (props) => {
  const [favArticles, setFavArticles] = useState(getFavArticles);

  useEffect(() => {
    localStorage.setItem("favArticles", JSON.stringify(favArticles));
  }, [favArticles]);

  const addFavArticle = (title, category, author, img) => {
    setFavArticles((prevFavArticles) => [
      ...prevFavArticles,
      { title, category, author, img },
    ]);
  };

  const removeFavArticle = (title) => {
    setFavArticles((prevFavArticles) =>
      prevFavArticles.filter((favArticle) => favArticle.title !== title)
    );
  };

  const isArticleFavorite = (title) => {
    return favArticles.some((article) => article.title === title);
  };

  return (
    <FavContext.Provider
      value={{
        favArticles,
        addFavArticle,
        removeFavArticle,
        isArticleFavorite,
      }}
    >
      {props.children}
    </FavContext.Provider>
  );
};

export default FavContextProvider;
