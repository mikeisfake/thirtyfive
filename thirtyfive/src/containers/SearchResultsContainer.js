import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MovieCard from '../components/MovieCard'
import { setMovieFromAPI } from '../redux/actions/setMovieFromAPI'
import { persistMovie } from '../redux/actions/persistMovie'
import { Link } from 'react-router-dom'
import { Fade } from "react-awesome-reveal";

const SearchResultsContainer = () => {

  const results = useSelector(state => state.results)
  const movie = useSelector(state => state.movie)
  const dispatch = useDispatch()


  const renderResults = results => {
    return (
      results.map( movie => (
        <Link to='/review'>
          <Fade>
            <MovieCard
              imdbid={movie.imdbID}
              poster={movie.Poster}
              title={movie.Title}
              year={movie.Year}
              save={setMovie}
            />
          </Fade>
        </Link>
      ))
    )
  }

  const setMovie = event => {
    const imdbid = event.target.id
    const URL = `http://www.omdbapi.com/?i=${imdbid}&apikey=${process.env.REACT_APP_API_KEY}`

    return fetch(URL)
      .then(res => res.json())
      .then(data => dispatch(persistMovie(data)))

  }


    return(
        <div className="searchresults flex flex-row">{results.length > 0 && renderResults(results)}</div>
    )
}
export default SearchResultsContainer
