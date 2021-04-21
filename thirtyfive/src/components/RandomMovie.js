import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import placeholder from '../images/poster_placeholder.jpg'

const RandomMovie = props => {

  return (
    <div id={props.id} key={props.id} className="randomcard flex flex-row">
      <img
        id={props.id}
        onClick={props.show}
        className="movieimg randomimg"
        src={props.poster === 'N/A' ? placeholder : props.poster}
        alt={props.title}
        data-title={props.title} />
      <div className="randominfo">
        <h2>{props.title} <span>({props.year})</span></h2>
        <p>{props.plot}</p>
      </div>
    </div>
  )
}

export default RandomMovie
