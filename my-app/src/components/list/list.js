import React from "react";

function ListFunction(props) {
  return (
    <ul style={{ listStyle: "none" }}>
      {props.list.map((item, index) => (
        <li key={index}>
          <input type="checkbox" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default ListFunction;
