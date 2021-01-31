import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MovieCard from '../components/MovieCard'

const SearchResultsContainer = () => {

  const results = useSelector(state => state.results)
  const dispatch = useDispatch()

  const renderResults = results => {
    return (
      results.map( movie => (
        <MovieCard
          imdbid={movie.imdbid}
          poster={movie.Poster}
          title={movie.Title}
          year={movie.Year}
        />
      ))
    )
  }

  const saveMovie = event => {
    console.log('yoo hoo')
  }

    return(
      <div className="searchresults flex flex-row">{results.length > 0 && renderResults(results)}</div>
    )


}
export default SearchResultsContainer
