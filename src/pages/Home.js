import NewsList from "../components/NewsList";

import "./Homepage.scss";

const Home = () => {
  return (
    <>
      <div className="Homepage">
        <NewsList />
        <NewsList />
        <NewsList />
        <NewsList />
        <NewsList />
        <NewsList />
      </div>
    </>
  );
};

export default Home;
