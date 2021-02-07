import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MovieCard from '../components/MovieCard'
import { createMovie } from '../redux/actions/createMovie'
import { Link } from 'react-router-dom'

const SearchResultsContainer = () => {

  const results = useSelector(state => state.results)
  const dispatch = useDispatch()


  const renderResults = results => {
    return (
      results.map( movie => (
        <Link to='/review'>
          <MovieCard
            imdbid={movie.imdbID}
            poster={movie.Poster}
            title={movie.Title}
            year={movie.Year}
            save={saveMovie}
          />
        </Link>
      ))
    )
  }

  const saveMovie = event => {
    dispatch(createMovie(event.target.id));
  }

    return(
      <div className="searchresults flex flex-row">{results.length > 0 && renderResults(results)}</div>
    )


}
export default SearchResultsContainer
