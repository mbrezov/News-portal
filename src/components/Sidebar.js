import { Link } from "react-router-dom";

const Siderbar = () => {
  return (
    <div>
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/general">
        <div>General</div>
      </Link>
      <Link to="/business">
        <div>Business</div>
      </Link>
      <Link to="/health">
        <div>Health</div>
      </Link>
      <Link to="/science">
        <div>Science</div>
      </Link>
      <Link to="/sports">
        <div>Sports</div>
      </Link>
      <Link to="/technology">
        <div>Technology</div>
      </Link>
    </div>
  );
};

export default Siderbar;
