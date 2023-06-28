import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHeader from "./components/PageHeader";
import Home from "./pages/Home";
import Siderbar from "./components/Sidebar";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <PageHeader />
      <BrowserRouter>
        <div className="mainpage">
          <Siderbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
