import React from "react";

const Button = React.memo((props) => {
  console.log("Button Running!");
  return <button onClick={props.onClick}>{props.children}</button>;
});

export default Button;
