import React from 'react'
import placeholder from '../images/poster_placeholder.jpg'

const MovieCard = props => {

  return (
    <div onClick={props.save} key={props.imdbid} className="moviecard">
      <img
        className="movieimg "
        id={props.imdbid}
        src={props.poster === 'N/A' ? placeholder : props.poster}
        alt={props.title}
        data-title={props.title}
      />
      <span>{props.title} ({props.year})</span>
    </div>
  )
}

export default MovieCard
