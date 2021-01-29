import React from 'react'

const MovieResult = props => {
  return (
   props.movies.map( movie => (
     <div className="moviecard" id={movie.imdbid}>
       <img src={movie.Poster} alt=""/>
       {movie.Title.toUpperCase()} ({movie.Year})
     </div>
   ))
 )
}

export default MovieResult
