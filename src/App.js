import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHeader from "./components/PageHeader";
import Siderbar from "./components/Sidebar";
import SearchLine from "./components/SearchLine";
import NewsList from "./components/NewsList";
import Favorites from "./pages/Favorites";
import MobileMenu from "./pages/MobileMenu";
import LatestNewsMobile from "./pages/LatestNewsMobile";
import FavContextProvider from "./context/FavArticleContext";
import SearchContextProvider from "./context/SearchContextProvider";
import "./App.scss";

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
                <Route path="/Home" element={<NewsList category={"home"} />} />
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
                <Route path="/Arts" element={<NewsList category={"arts"} />} />
                <Route
                  path="/Automobiles"
                  element={<NewsList category={"automobiles"} />}
                />
                <Route
                  path="/Fashion"
                  element={<NewsList category={"fashion"} />}
                />
                <Route path="/Food" element={<NewsList category={"food"} />} />
                <Route
                  path="/Insider"
                  element={<NewsList category={"insider"} />}
                />
                <Route
                  path="/Magazine"
                  element={<NewsList category={"magazine"} />}
                />
                <Route
                  path="/Movies"
                  element={<NewsList category={"movies"} />}
                />
                <Route
                  path="/NYregion"
                  element={<NewsList category={"nyregion"} />}
                />
                <Route
                  path="/Obituaries"
                  element={<NewsList category={"obituaries"} />}
                />
                <Route
                  path="/Opinion"
                  element={<NewsList category={"opinion"} />}
                />
                <Route
                  path="/Politics"
                  element={<NewsList category={"politics"} />}
                />
                <Route
                  path="/Realestate"
                  element={<NewsList category={"realestate"} />}
                />
                <Route
                  path="/Sundayreview"
                  element={<NewsList category={"sundayreview"} />}
                />
                <Route
                  path="/Theater"
                  element={<NewsList category={"theater"} />}
                />
                <Route
                  path="/T-magazine"
                  element={<NewsList category={"t-magazine"} />}
                />
                <Route
                  path="/Upshot"
                  element={<NewsList category={"upshot"} />}
                />
                <Route
                  path="/Travel"
                  element={<NewsList category={"travel"} />}
                />
                <Route path="/Us" element={<NewsList category={"us"} />} />
                <Route
                  path="/Books-Review"
                  element={<NewsList category={"books/review"} />}
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
