import React from "react";

function ResultList(props) {
let employees = props.results; 
let filteredEmployees= employees.filter((employee) => employee.name.first.includes(props.search)|| employee.name.last.includes(props.search));  
  
  

  
  
  return (
    <ul className="list-group">
      {filteredEmployees.map((employee) => (
        <li key={employee.cell} className="list-group-row">
          <img
            alt="employee.name.first"
            src={employee.picture.thumbnail}
            className="img-fluid"
          />
          {employee.name.first}

          {employee.name.last}
         
          {employee.location.state}
         
          {employee.cell}
        </li>
      ))}
    </ul>
  );
};
  
  export default ResultList;


