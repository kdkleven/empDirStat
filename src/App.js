import React, { Component } from "react";
import EmployeeTable from "./components/EmployeeTable";
import SearchForm from "./components/SearchForm";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
//import employees from "./employees.json";
import API from "./utils/API";
import EmployeeRecord from "./components/EmployeeRecord";

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
    }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    console.log(this.state.employees);
    console.log(this.state.name);
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        <SearchForm />
        <EmployeeTable />
          {this.state.employees.map(employee => (
          <EmployeeRecord
                // SEARCH removeEmployee={this.removeFriend}
              // FILTER
              picture={employee.picture.medium}
              name={employee.name.first}
              phone={employee.phone}
              email={employee.email}
              dob={employee.dob.date}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;