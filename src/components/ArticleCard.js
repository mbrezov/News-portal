import "./AticleCard.scss";

const ArticleCards = (props) => {
  return (
    <div className="card-container">
      <img
        src="https://i.ytimg.com/vi/JxS5E-kZc2s/maxresdefault.jpg"
        alt="no_image"
      />
      <div className="card-footer">
        <div className="card-category">FUNNY MEME</div>
        <div className="card-title">
          Title od this news is that cat is funny ha ha
        </div>
        <div className="card-author">Donald Duck</div>
      </div>
    </div>
  );
};

export default ArticleCards;
