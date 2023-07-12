import { createContext, useState } from "react";
export const SearchContext = createContext();

const SearchContextProvider = (props) => {
  const [articleSearch, setArticleSearch] = useState("");

  const articleSearchBar = (search) => {
    setArticleSearch(search);
    console.log(articleSearch);
    return articleSearch;
  };

  return (
    <SearchContext.Provider
      value={{
        articleSearch,
        articleSearchBar,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
