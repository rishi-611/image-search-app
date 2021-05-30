import React from "react";
import "semantic-ui-css/semantic.min.css";

const Header = function () {
  return (
    <div className="header-container">
      <h1
        className="ui grey inverted header"
        style={{ marginBottom: "0.5rem" }}
      >
        Imagify&nbsp;
        <i className="icons">
          <i className="inverted  image icon"></i>
          <i className="inverted  small corner search icon"></i>
        </i>
      </h1>
    </div>
  );
};

export default Header;
