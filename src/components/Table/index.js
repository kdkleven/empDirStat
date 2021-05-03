import React, { Component } from "react";
import Title from "./components/Title";
import Search from "./components/Search";
import Record from "./components/Record";
import Filter from "./components/Filter"
import API from "./utils/API";

class Table extends Component {
    // Setting this.state.friends to the friends json array
    state = {
        employees: [],
        search: "",
        order: ""
    }

    componentDidMount() {
        API.getEmployees()
            .then(results => {
                this.setState({ employees: results.data.results });
            });
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSearch = event => {
        event.preventDefault();

    }

    handleSort() {

    }

    // Map over this.state.friends and render a FriendCard component for each friend object
    render() {
        console.log("Table", this.state.employees)
        return (
            <container>
                <Title />
                <Search />
                <table className="table table-image">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col"
                                className="pointer"
                                data-order={this.state.order}
                                onClick={this.handleSort}>
                                Name
                            </th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th scope="col">DOB</th>
                        </tr>
                    </thead>
                    {!this.state.search ?
                        (
                            <Record 
                                filter={this.state.result} 
                            />
                        )
                        :
                        (
                            <Filter 
                                results={this.state.results} 
                                value={this.state.search} 
                            />
                        )
                    }
                </table>
            </container>
        )
    }
}

export default Table;