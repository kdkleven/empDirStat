
import React from "react";
import { format } from 'date-fns';

function Record(props) {
    //console.log("Record", props)
    return (
        <tbody>
       {props.result.map((employee, index) => (
            <tr id={index}>
                <td class="w-25"><img src={employee.picture.medium} class="img-fluid img-thumbnail" alt={props.lastName} /></td>
                <td>{employee.name.first} {employee.name.last}</td>
                <td>{employee.cell}</td>
                <td>{employee.email}</td>
                <td>{format(new Date(employee.dob.date), 'MM/dd/yyyy')}</td>
            </tr>
       ))}
        </tbody>
    );
}

export default Record;

