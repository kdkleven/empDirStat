import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function Search(props) {
  return (
    <form>
          <div className="form-group">
            <input
              onChange={props.handleInputChange}
              type="text"
              name="search"
              value={props.value}
              className="form-control"
              placeholder="Filter employee by name"
              id="search"
            />
          </div>
        </form>
  );
}

export default Search;

