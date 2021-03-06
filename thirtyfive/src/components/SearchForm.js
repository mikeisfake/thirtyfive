import React from 'react'

const SearchForm = props => {

  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <input type="text" value={props.query} placeholder="search" onChange={props.onChange} className="s-input"/>
      </form>
    </div>
  )
};

export default SearchForm
