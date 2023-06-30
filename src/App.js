import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHeader from "./components/PageHeader";
import Home from "./pages/Home";
import Siderbar from "./components/Sidebar";
import "./App.scss";
import SearchLine from "./components/SearchLine";
import NewsList from "./components/NewsList";

function App() {
  return (
    <div className="App">
      <PageHeader />
      <BrowserRouter>
        <SearchLine />
        <div className="mainpage">
          <Siderbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/World News"
              element={<NewsList category={"world"} />}
            />
            <Route path="/Sports" element={<NewsList category={"sports"} />} />
            <Route
              path="/Business"
              element={<NewsList category={"business"} />}
            />
            <Route path="/Health" element={<NewsList category={"health"} />} />
            <Route
              path="/Technology"
              element={<NewsList category={"technology"} />}
            />
            <Route
              path="/Science"
              element={<NewsList category={"science"} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
