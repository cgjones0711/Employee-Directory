import React from "react";

function ResultList(props) {
  return (
    <ul className="list-group">
      {props.results.map(result => (
        <li key={result.id} className="list-group-row">
        <img alt="Employee" src={result.name} className="img-fluid" />
      </li>
      ))}
    </ul>
  );
}

export default ResultList;
