import React from "react";
import { format } from 'date-fns';

function Filter(props) {
    console.log("Filter", props)
    return (
        <tbody>
            {props.results.filter(employee => {
                const name = employee.name.first.toLowerCase() + employee.name.last.toLowerCase();
                const filterEmp = employee.value.toLowerCase()
                const result = name.includes(filterEmp)
               return result
            }).map(filtered => (
                <tr key={filtered.login.uuid}>
                    <td>
                        <img src={filtered.picture.medium} alt={ `headshot of: ${result.name.first} ${result.name.last}` } ></img>
                    </td>
                    <td>
                        {filtered.name.first} {filtered.name.last}
                    </td>
                    <td>
                        {filtered.cell}
                    </td>
                    <td>
                        {filtered.email}
                    </td>
                    <td data-th="DOB">
                        {formatDate(filtered.dob.date)}
                    </td>
                </tr>
            ))}
        </tbody>
    );
}

export default Filter;