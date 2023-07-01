import { NavLink } from "react-router-dom";
import "./AticleCard.scss";
import { useState, useEffect } from "react";

const ArticleCards = (props) => {
  const [isFav, setIsFav] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem(props.title);
    setIsFav(localData ? JSON.parse(localData) : false);
  }, [props.title]);

  const onClickHandler = () => {
    const newFav = [
      {
        title: props.title,
        category: props.category,
        author: props.author,
        img: props.img,
      },
    ];
    setIsFav(newFav);
    localStorage.setItem(props.title, JSON.stringify(newFav));
  };

  // if (!isFav) {
  //   return null; // If isFav is false, don't render the component
  // }

  return (
    <div className="card-container">
      <img src={props.img} alt="no_image" />
      <div className="card-footer">
        <NavLink to={`/${props.category}`}>{props.category}</NavLink>
        <div className="card-title">{props.title}</div>
        <div className="card-author">{props.author}</div>
        {!isFav && <button onClick={onClickHandler}>add</button>}
      </div>
    </div>
  );
};

export default ArticleCards;
