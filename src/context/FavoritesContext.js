import { createContext, useState, useEffect } from "react";

export const FavoritesContext = createContext();

const FavoritesContextProvider = (props) => {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    const localData = localStorage.getItem(props.title);
    setFavorites(localData ? JSON.parse(localData) : false);
  }, [props.title]);

  return (
    <FavoritesContext.Provider value={favorites}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
