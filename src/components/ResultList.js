import React from "react";
function ResultList(props) {
  
  let employees = props.results;
  console.log(props.results)
  return (
    <ul className="list-group">
      {employees.map(employee => (
        <li key={employee.cell} className="list-group-row">
        <img alt="employee.name.last" src={employee.picture.thumbnail} className="img-fluid" />
        {
          employee.name.first
          
        }
        
        {
          employee.name.last
          
        }
        <b></b>
        {
          employee.location.state
          
        }
        <b></b>
        {
          employee.cell
          
        }
      </li>
      ))}
    </ul>
  )
}

export default ResultList;
      
       
