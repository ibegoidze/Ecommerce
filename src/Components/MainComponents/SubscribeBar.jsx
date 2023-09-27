import React from "react";
import "./SubscribeBar.scss";

const SubscribeBar = () => {
  return (
    <div className="SBmain">
      <div className="SBcontainer">
        <h2>Subscribe on our newsietter</h2>
        <p>
          Get daily news on upcoming offers from many suppliers all over the
          world
        </p>
        <div className="SBmailbutton">
          <input type="email" placeholder="Email" id="SBmailinput"/>
          <button>subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeBar;
