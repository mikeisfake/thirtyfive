import React from 'react'
import { useSelector } from 'react-redux'
import placeholder from '../images/poster_placeholder.jpg'

const MovieDetail = () => {

  const movie = useSelector(state => state.userMovie)

  const renderDetails = () => {
    return (
      <div className="moviedetail flex flex-col">
        <img
          src={movie.poster === 'N/A' ? placeholder : movie.poster} alt={movie.title}/>
        <h2>{movie.title}<span className="yeardetail"> ({movie.year})</span></h2>
        <p>dir: {movie.director}</p><br />
        <p>released: {movie.released}</p>
        <p>{movie.genre}</p><br/>
        <p className="plot">{movie.plot}</p>
      </div>
    )
  }

  return (
    <>
      {renderDetails()}
    </>
  )
}

export default MovieDetail
