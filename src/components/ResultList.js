import React from "react";

function ResultList(props) {
let employees = props.results;
  
  employees.filter((employee) =>  {
    if(employees === props.results.target){
    return (
      <ul className="list-group">
     <li key={employee.cell} className="list-group-row">
          <img
            alt="employee.name.last"
            src={employee.picture.thumbnail}
            className="img-fluid"
          />
    {employee.name.first}

    {employee.name.last}
   
    {employee.location.state}
   
    {employee.cell}
    </li>
  ))
  </ul>
    );
    }
    else {
  
  
  return (
    <ul className="list-group">
      {employees.map((employee) => (
        <li key={employee.cell} className="list-group-row">
          <img
            alt="employee.name.last"
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
}
  export default ResultList;


