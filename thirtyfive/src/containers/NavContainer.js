import React, { Component } from 'react';
import SearchForm from '../components/SearchForm'
import Title from '../components/Title'


class NavContainer extends Component {

  state = {
    query:'',
  }



  handleOnChange = event => {
    this.setState({
      query: event.target.value
    })
  }

  handleOnSubmit = event => {
    const URL = `http://www.omdbapi.com/?s=${this.state.query}&apikey=2cedcff3&`
    event.preventDefault()
    console.log(this.state.query)

    fetch(URL)
      .then(res => res.json())
      .then(data => console.log(data))
  }

  render() {
    return(
      <div>
        <Title />
        <SearchForm onChange={this.handleOnChange} onSubmit={this.handleOnSubmit} query={this.state.query}/>
      </div>
    )
  }
}
 export default NavContainer
