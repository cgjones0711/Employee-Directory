import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: []
  };

  // When this component mounts, search the API for pictures of employees
  componentDidMount() {
    this.searchEmployee();
  }

  searchEmployee = query => {
    API.search(query)

      .then(res => 
          {
            console.log(res.data.results)
            this.setState({ results: res.data.results })
          })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
 
    this.setState({
      [name]: value,
      
    });
  };

  // When the form is submitted, search the employee API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployee(this.state.search);
  };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList results={this.state.result} />
      </div>
    );
  }
}

export default SearchResultContainer;
