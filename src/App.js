import React, { Component } from "react";
import EmployeeCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";


//API
// $.ajax({
//   url: 'https://randomuser.me/api/',
//   dataType: 'json',
//   success: function(data) {
//     console.log(data);
//   }
// });

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const employees = this.state.employees.filter(employee => employee.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ employee });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        {this.state.employees.map(friend => (
          <EmployeeCard
            removeEmployee={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
