import React from "react";
import { format } from 'date-fns';

function Filter(props) {
    console.log("Filter", props)
    return (
        <tbody>
            {props.results.filter(filter => {
                const name = filter.name.first.toLowerCase() + filter.name.last.toLowerCase();
                const filterName = props.value.toLowerCase()
                const filtered = name.includes(filterName)
               return filtered
            }).map(filtered => (
                <tr>
                <td class="w-25"><img src={filtered.picture.medium} class="img-fluid img-thumbnail" alt={props.lastName} /></td>
                <td>{filtered.name.first} {filtered.name.last}</td>
                <td>{filtered.cell}</td>
                <td>{filtered.email}</td>
                <td>{format(new Date(filtered.dob.date), 'MM/dd/yyyy')}</td>
            </tr>
            ))}
        </tbody>
    );
}

export default Filter;