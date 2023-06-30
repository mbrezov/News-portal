import NewsList from "../components/NewsList";

import "./Homepage.scss";

const Home = () => {
  return (
    <>
      <div className="Homepage">
        <NewsList category={"home"} />
      </div>
    </>
  );
};

export default Home;
