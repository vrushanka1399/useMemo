import React from "react";

const DemoList = React.memo((props) => {
  console.log("DemoList running...");
  return (
    <div>
      <h2>{props.title}</h2>
      <ul>
        {props.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
});

export default DemoList;
