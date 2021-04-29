import React from "react";
import "./style.css";
import EmployeeRecord from "../EmployeeRecord";

function EmployeeTable(props) {
  console.log(props);
  return (
    <table class="table table-image">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
      <EmployeeRecord 
        picture={props.picture}
        name={props.name}
        phone={props.phone}
        email={props.email}
        dob={props.dob}
      />
      </tbody>
    </table>

  );
}

export default EmployeeTable;


