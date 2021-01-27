import React from 'react'

const SearchForm = props => {

  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <input type="text" value={props.query} placeholder="search" onChange={props.onChange}/>
        <input type="submit" value="search"/>
      </form>
    </div>
  )
};

export default SearchForm
