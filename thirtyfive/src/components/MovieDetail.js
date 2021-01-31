import React from 'react'
import { useSelector } from 'react-redux'

const MovieDetail = () => {

  const movie = useSelector(state => state.movie)

  if (movie.length >= 0) {
    return null
  }

  return (
      <div className="moviedetail">
        <img src={movie.Poster} alt={movie.Title}/>
        <h2>{movie.Title}</h2>
        <p>dir: {movie.Director}</p><br />
        <p>released: {movie.Released}</p>
        <p>genre: {movie.Genre}</p><br/>
        <p>{movie.Plot}</p>
      </div>
  )
}

export default MovieDetail
