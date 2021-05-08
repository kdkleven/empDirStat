import React from "react";
import { format } from 'date-fns';

function Filter(props) {
    return (
        <tbody>
            {props.result.filter(filter => {
                let pName = filter.name.first.toLowerCase() + filter.name.last.toLowerCase();
                let fName = props.value.toLowerCase().trim()
                let rName = pName.includes(fName)
               return rName
            })
            .map((rName, index) => (
            <tr key={index}>
                <td className="w-25">
                    <img src={rName.picture.medium} className="img-fluid img-thumbnail" alt={rName.lastName} />
                </td>
                <td>{rName.name.first} {rName.name.last}</td>
                <td>{rName.cell}</td>
                <td>{rName.email}</td>
                <td>{format(new Date(rName.dob.date), 'MM/dd/yyyy')}</td>
            </tr>
       ))}
        </tbody>
    );
}

export default Filter;