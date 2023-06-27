const ArticleCards = (props) => {
  return (
    <div>
      <img src={props.img} alt="no_image" />
      <div>{props.title}</div>
      <div>{props.author}</div>
    </div>
  );
};

export default ArticleCards;
