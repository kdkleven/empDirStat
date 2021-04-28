import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
//import employees from "./employees.json";
import API from "./utils/API";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees: [],
  };

  //this.setState({ employees: getEmployees.getEmployees() });


  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const employees = this.state.employees.filter(employee => employee.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ employees });
  };

  componentDidMount() {
    API.getEmployees()
      .then(results => {
        //console.log(results.data.results);
        this.setState({ employees: results.data.results });
      })
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    console.log(this.state.employees);
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        {this.state.employees.map(employee => (
          <EmployeeCard
              removeEmployee={this.removeFriend}
              firstName={employee.name.first}
              lastName={employee.name.last}
              email={employee.email}
              picture={employee.picture.medium}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;


// <Wrapper>

//         {this.state.employees.map(friend => (
//           <EmployeeCard
//             removeEmployee={this.removeFriend}
//             id={friend.id}
//             key={friend.id}
//             name={friend.name}
//             image={friend.image}
//             occupation={friend.occupation}
//             location={friend.location}
//           />
//         ))}
//       </Wrapper>