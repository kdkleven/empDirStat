import React from "react";
import { format } from 'date-fns';

function Filter(props) {
    console.log("Filter", props)
    return (
        <tbody>
        {props.result.map((employee, index) => (
            <tr key={index}>
                <td className="w-25">
                    <img src={employee.picture.medium} className="img-fluid img-thumbnail" alt={props.lastName} />
                </td>
                <td>{employee.name.first} {employee.name.last}</td>
                <td>{employee.cell}</td>
                <td>{employee.email}</td>
                <td>{format(new Date(employee.dob.date), 'MM/dd/yyyy')}</td>
            </tr>
       ))}
        </tbody>
    );
}

export default Filter;