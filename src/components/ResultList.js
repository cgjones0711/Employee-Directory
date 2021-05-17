import React from "react";
let employee = props.results;
function ResultList(props) {
 
  return (
    <ul className="list-group">
      {props.employees.map(employees => (
        <li key={employees.id} className="list-group-row">
        <img alt="employee.name" src={employee.picture.thumbnail} className="img-fluid" />
      </li>
      ))}
    </ul>
  );
}

export default ResultList;
       
