import React, { Component } from "react";
import SearchForm from "./components/SearchForm";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import EmployeeRecord from "./components/EmployeeRecord";
import API from "./utils/API";
import { format } from 'date-fns';

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees: [],
    search: "",
    order: ""
  };

  componentDidMount() {
    API.getEmployees()
      .then(results => {
        this.setState({ employees: results.data.results });
      });   
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  
  handleSearch = event => {
    event.preventDefault();


  };


  handleSort() {

  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    console.log(this.state.employees);
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        <form>
      <div className="form-group">
        <input
          onChange={this.handleInputChange}
          value={this.state.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search the employee directory"
          id="search"
        />
        <button onClick={this.handleSearch} className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
        <table class="table table-image">
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
          {this.state.employees.map(employee => (
          <EmployeeRecord
                // SEARCH removeEmployee={this.removeFriend}
              // FILTER
              id={employee.id.value}
              picture={employee.picture.medium}
              name={employee.name.first + " " + employee.name.last}
              cell={employee.cell}
              email={employee.email}
              dob={format(new Date(employee.dob.date), 'MM/dd/yyyy' )}
          />
        ))}
        </table>
      </Wrapper>
    );
  }
}

export default App;