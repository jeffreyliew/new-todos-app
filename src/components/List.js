import React from "react";
import { Link } from "react-router-dom";

export default function List(props) {
  return (
    <ul>
      {props.items.map(item => (
        <li key={item.id}>
          <span
            onClick={() => props.toggle(item.id)}
            style={{ textDecoration: item.complete ? "line-through" : "none" }}
          >
            {item.name}
          </span>
          <Link to={item.id}>
            <button>Details</button>
          </Link>
          <button onClick={() => props.delete(item.id)}>X</button>
        </li>
      ))}
    </ul>
  );
}
