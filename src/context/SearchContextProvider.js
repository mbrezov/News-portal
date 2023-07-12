import { createContext, useState } from "react";
export const SearchContext = createContext();

const SearchContextProvider = (props) => {
  const [articleSearch, setArticleSearch] = useState("");

  const articleSearchBar = (search) => {
    setArticleSearch(search);
    return articleSearch;
  };

  const resetSearch = () => {
    setArticleSearch("");
  };

  return (
    <SearchContext.Provider
      value={{
        articleSearch,
        resetSearch,
        articleSearchBar,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
