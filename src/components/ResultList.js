import React from "react";
function ResultList(props) {
  let employees = props.results;
  let filteredEmployees=employees.filter
  console.log(props.results);
  {filteredEmployees.sort((filteredEmployee) =>
    <li key={filteredEmployee.cell} className="list-group-row">
    <img
      alt="filteredEmployee.name.last"
      src={filteredEmployee.picture.thumbnail}
      className="img-fluid"
    />
    {filteredEmployee.name.first}

    {filteredEmployee.name.last}
   
    {filteredEmployee.location.state}
   
    {filteredEmployee.cell}
  </li>
   )}
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
