import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getResults } from '../redux/actions/getResults'
import SearchForm from '../components/SearchForm'



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
      <div>
        <nav id="main-nav" className="flex">
          <SearchForm onChange={handleOnChange} onSubmit={handleOnSubmit} query={query}/>
        </nav>
        <div className="recent-movies">

        </div>
      </div>
    )
}
 export default NavContainer
