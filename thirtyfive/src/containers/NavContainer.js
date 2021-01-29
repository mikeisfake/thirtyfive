import React, { Component } from 'react';
import SearchForm from '../components/SearchForm'
import Title from '../components/Title'
import MovieResult from '../components/MovieResult'


class NavContainer extends Component {

  state = {
    query:'',
    searchResults: [],
  }

  getResults = url => {
    fetch(url)
      .then(res => res.json())
      .then(({ Search }) => {
        this.setState({
          searchResults: Search,
          query: '',
        })
        console.log(this.state.searchResults)
      })
  }

  renderResults = () => {
    return (
      <MovieResult movies={this.state.searchResults} />
    )
  }

  handleOnChange = event => {
    this.setState({
      query: event.target.value
    })
  }

  handleOnSubmit = event => {
    const URL = `http://www.omdbapi.com/?s=${this.state.query}&apikey=${process.env.REACT_APP_API_KEY}`
    event.preventDefault()
    this.getResults(URL)
  }

  render() {
    return(
      <div>
        <Title />
        <SearchForm onChange={this.handleOnChange} onSubmit={this.handleOnSubmit} query={this.state.query}/>
        {this.state.searchResults.length > 0 && this.renderResults()}
      </div>
    )
  }
}
 export default NavContainer
