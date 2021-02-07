import React from 'react'
import { Link } from 'react-router-dom'

const RandomMovie = props => {

  return (
    <div key={props.imdbid} className="randomcard flex flex-row">
      <img onClick={props.show} className="movieimg randomimg" id={props.id} src={props.poster} alt={props.title} data-title={props.title} />
      <div className="randominfo">
        <h2>{props.title} <span>({props.year})</span></h2>
        <p>{props.plot}</p>
      </div>
    </div>
  )
}

export default RandomMovie
