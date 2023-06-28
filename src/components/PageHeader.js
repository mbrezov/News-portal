import "./PageHeader.scss";

const PageHeader = () => {
  const clickMe = () => {
    alert("I'm working :)");
  };

  return (
    <div className="phead-container">
      <p className="phead-text1">Make MyNews your homepage</p>
      <p className="phead-text2">
        Every day discover what’s trending on the internet!
      </p>
      <div className="pbuttons">
        <button onClick={clickMe} className="btn-1">
          GET
        </button>
        <button onClick={clickMe} className="btn-2">
          No, thanks
        </button>
      </div>
    </div>
  );
};

export default PageHeader;
