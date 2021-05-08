import React, { Component } from "react";
import "./style.css"
import Record from "../Record/"
import Filter from "../Filter/"
import Search from "../Search/"
import API from "../../utils/API"

class Directory extends Component {
  state = {
    employees: [],
    search: "",
    order: ""
  }

  componentDidMount() {
    API.getEmployees()
      .then(results => { this.setState({ employees: results.data.results }) })
      .catch(err => console.log(err))
  }

  handleSort = (event) => {
    event.preventDefault();
    if (`${this.state.order}` === "" || `${this.state.order}` === "descending") {
      this.setState({
        order: "ascending"
      })

      let dobASC = this.state.employees.sort((a, b) => {
        let aa = a.dob.date;
        let bb = b.dob.date;
        if (aa < bb) {
          return -1
        }
        return 0;
      })
      this.setState({
        result: dobASC
      })
    }

    else if (`${this.state.order}` === "ascending") {
      this.setState({
        order: "descending"
      })

      let dobDESC = this.state.employees.sort((a, b) => {
        let aa = a.dob.date;
        let bb = b.dob.date;

        if (aa > bb) {
          return -1
        }
        return 0;
      })

      this.setState({
        result: dobDESC
      })
    }
  }

  handleInputChange = event => {
    const name = event.target.name
    const value = event.target.value

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <Search 
          value={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <table id="dtBasicExample" className="table table-dark" width="100%">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="arrow"
                  data-order={this.state.order}
                  onClick={this.handleSort}>
                  DOB
              </th>
            </tr>
          </thead>
            {!this.state.search ?(
                <Record
                  result={this.state.employees}
                />
              )
              :
              (
                <Filter
                  result={this.state.employees}
                  value={this.state.search}
                />
            )}
        </table>
      </div>
    )
  }
}

export default Directory;