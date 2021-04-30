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
        <tr>
          <td class="w-25"><img src={props.picture} class="img-fluid img-thumbnail" alt={props.lastName} /></td>
          <td>{props.name}</td>
          <td>{props.phone}</td>
          <td>{props.email}</td>
          <td>{props.dob}</td>
        </tr>
      </tbody>
    </table>

  );
}

export default EmployeeTable;


