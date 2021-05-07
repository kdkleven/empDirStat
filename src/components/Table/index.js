import React from "react";
import Record from "../Record";
import Filter from "../Filter";


function Table(props) {
    //console.log("Table", props.employees)
    // use sort method
    return (
        <table className="table table-image">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col"
                        className="pointer"
                        data-order={props.order}
                        onClick={props.handleSort}>
                        Name
                            </th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>
            {!props.search ?
                (
                    <Record
                        result={props.employees}
                    />
                )
                :
                (
                    <Filter
                        result={props.search}
                    />
                )
            }
        </table>
    )
}

export default Table;