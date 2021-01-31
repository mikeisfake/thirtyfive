import React, { useState } from 'react';
import SearchForm from '../components/SearchForm'
import { useDispatch } from 'react-redux'
import { getResults } from '../redux/actions/getResults'


const NavContainer = () => {

  const dispatch = useDispatch();

  const [query, setQuery] = useState('')

  const handleOnChange = event => {
    setQuery(event.target.value)
  }

  const handleOnSubmit = event => {
    event.preventDefault()
    dispatch(getResults(query))
    setQuery('')
  }

    return(
      <nav id="main-nav">
        <SearchForm onChange={handleOnChange} onSubmit={handleOnSubmit} query={query}/>
      </nav>
    )
}
 export default NavContainer
