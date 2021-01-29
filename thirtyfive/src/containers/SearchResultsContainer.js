import React from 'react'

const SearchResultsContainer = props => {
    return(
    <div>
      {props.results.length > 0 && props.render()}
    </div>
    )

}
export default SearchResultsContainer
