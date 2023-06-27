import Navbar from "../components/Navbar";
import NewsList from "../components/NewsList";
import Siderbar from "../components/Sidebar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Siderbar />
      <NewsList />
    </div>
  );
};

export default Home;
