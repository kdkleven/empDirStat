
import React from "react";

function EmployeeRecord(props) {
    console.log(props);
    return (
        <tr>
            <td class="w-25"><img src={props.picture} class="img-fluid img-thumbnail" alt={props.lastName} /></td>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.dob}</td>
        </tr>
    );
}

export default EmployeeRecord;
