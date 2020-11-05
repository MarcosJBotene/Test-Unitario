import React from "react";

import "./styles.css";

const Container: React.FC = props => {
  return <div id="container">{props.children}</div>;
};

export default Container;
