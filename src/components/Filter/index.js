import React from "react";
import { format } from 'date-fns';

function Filter(props) {
    console.log("Filter", props)
    return (
        <tbody>
            props.result.map((filtered, index) => (
                <tr id={index}>
                <td class="w-25"><img src={filtered.picture.medium} class="img-fluid img-thumbnail" alt={props.lastName} /></td>
                <td>{filtered.name.first} {filtered.name.last}</td>
                <td>{filtered.cell}</td>
                <td>{filtered.email}</td>
                <td>{format(new Date(filtered.dob.date), 'MM/dd/yyyy')}</td>
            </tr>
            ))
        </tbody>
    );
}

export default Filter;