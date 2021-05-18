import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: [],
    filtered: [],
  };

  // When this component mounts, search the API for data of employees
  componentDidMount() {
    this.searchEmployee();
  }

  searchEmployee = () => {
    API.search()

      .then((res) =>
        this.setState({
          results: res.data.results,
          filtered: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  };

  // When the form is submitted, search the employee API for `this.state.search`
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchEmployee();
  };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList search={this.state.search} results={this.state.results} />
      </div>
    );
  }
}

export default SearchResultContainer;
