import "./AticleCard.scss";

const ArticleCards = (props) => {
  return (
    <div className="card-container">
      <img src={props.img} alt="no_image" />
      <div className="card-footer">
        <div className="card-category">TECH</div>
        <div className="card-title">{props.title}</div>
        <div className="card-author">{props.author}</div>
      </div>
    </div>
  );
};

export default ArticleCards;
