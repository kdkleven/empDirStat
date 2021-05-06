import React, {Component} from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Table from "./components/Table";
import Search from "./components/Search";
import API from "./utils/API";

class App extends Component {
  state = {
    employees: [],
    search: "",
    order: ""
  }
  
  componentDidMount() {
    API.getEmployees()
        .then(results => {
            console.log("didmount",results.data.results);
            this.setState({ employees: results.data.results });
        });
    }

    handleInputChange = event => {
     // const value = event.target;
       console.log("input change", event.target.value);
       this.setState({ search: event.target.value });
    
   }

   handleFormSubmit () {
    console.log("formsubmit", this.state.search)


   }


   render () {
    return (
      <Wrapper> 
        <Title/>
        <Search
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <Table
          employees={this.state.employees}
        />
      </Wrapper>
      )
   }
}

export default App;










