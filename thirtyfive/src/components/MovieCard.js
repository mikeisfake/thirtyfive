import React from 'react'

const MovieCard = props => {

  return (
    <div onClick={props.save} key={props.imdbid}>
      <img className="movieimg moviecard" id={props.imdbid} src={props.poster} alt={props.title} data-title={props.title} />
    </div>
  )
}

export default MovieCard
