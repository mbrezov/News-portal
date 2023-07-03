import { useState } from "react";
import "./PageHeader.scss";

const PageHeader = () => {
  const [hide, setHide] = useState(false);

  const onClickHide = () => {
    setHide(true);
  };

  return (
    <>
      {!hide ? (
        <div className="phead-container">
          <p className="phead-text1">Make MyNews your homepage</p>
          <p className="phead-text2">
            Every day discover what’s trending on the internet!
          </p>
          <div className="pbuttons">
            <button onClick={() => alert("I'm working :)")} className="btn-1">
              GET
            </button>
            <button onClick={onClickHide} className="btn-2">
              No, thanks
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default PageHeader;
