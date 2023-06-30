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
      <SearchLine />
      <BrowserRouter>
        <div className="mainpage">
          <Siderbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/general" element={<NewsList category={"world"} />} />
            <Route path="/sports" element={<NewsList category={"sports"} />} />
            <Route
              path="/business"
              element={<NewsList category={"business"} />}
            />
            <Route path="/health" element={<NewsList category={"health"} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
