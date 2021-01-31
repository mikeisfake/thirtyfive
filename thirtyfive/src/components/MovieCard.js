import React from 'react'

const MovieCard = props => {

  return (
    <div className="moviecard" id={props.imdbid} key={props.imdbid}>
      <img className="movieimg" src={props.poster} alt=""/>
      <p className="movietitle">
        {props.title.toUpperCase()} ({props.year})
      </p>
    </div>
  )
}

export default MovieCard
