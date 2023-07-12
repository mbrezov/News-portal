import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHeader from "./components/PageHeader";
import Home from "./pages/Home";
import Siderbar from "./components/Sidebar";
import "./App.scss";
import SearchLine from "./components/SearchLine";
import NewsList from "./components/NewsList";
import Favorites from "./pages/Favorites";
import MobileMenu from "./pages/MobileMenu";
import LatestNewsMobile from "./pages/LatestNewsMobile";
import FavContextProvider from "./context/FavArticleContext";
import SearchContextProvider from "./context/SearchContextProvider";

function App() {
  return (
    <div className="App">
      <FavContextProvider>
        <SearchContextProvider>
          <PageHeader />
          <BrowserRouter>
            <SearchLine />
            <div className="mainpage">
              <Siderbar />
              <Routes>
                <Route path="/mobilemenu" element={<MobileMenu />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/" element={<Home />} />
                <Route
                  path="/World"
                  element={<NewsList category={"world"} />}
                />
                <Route
                  path="/Sports"
                  element={<NewsList category={"sports"} />}
                />
                <Route
                  path="/Business"
                  element={<NewsList category={"business"} />}
                />
                <Route
                  path="/Health"
                  element={<NewsList category={"health"} />}
                />
                <Route
                  path="/Technology"
                  element={<NewsList category={"technology"} />}
                />
                <Route
                  path="/Science"
                  element={<NewsList category={"science"} />}
                />
                <Route path="/latest news" element={<LatestNewsMobile />} />
              </Routes>
            </div>
          </BrowserRouter>
        </SearchContextProvider>
      </FavContextProvider>
    </div>
  );
}

export default App;
