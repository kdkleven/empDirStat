import React, { Component } from "react";
import SearchForm from "./components/SearchForm";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
//import employees from "./employees.json";
import EmployeeRecord from "./components/EmployeeRecord";
import API from "./utils/API";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees: [],
  };

  //this.setState({ employees: getEmployees.getEmployees() });


  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const employees = this.state.employees.filter(employee => employee.id.value !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ employees });
  };

  componentDidMount() {
    API.getEmployees()
      .then(results => {
        //console.log(results.data.results);
        this.setState({ employees: results.data.results });
      });
    };

    handleInputChange = event => {
      this.setState({ search: event.target.value });
    };
  
    handleFormSubmit = event => {
      event.preventDefault();
      API.getDogsOfBreed(this.state.search)
        .then(res => {
          if (res.data.status === "error") {
            throw new Error(res.data.message);
          }
          this.setState({ results: res.data.message, error: "" });
        })
        .catch(err => this.setState({ error: err.message }));
    };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    console.log(this.state.employees);
    //console.log(this.state.name);
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        <SearchForm />
        <table class="table table-image">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
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
              name={employee.name.first}
              phone={employee.phone}
              email={employee.email}
              dob={employee.dob.date}
          />
        ))}
        </table>
      </Wrapper>
    );
  }
}

export default App;