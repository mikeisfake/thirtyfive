import React from 'react'

const MovieCard = props => {

  return (
    <div key={props.imdbid} onClick={props.save}>
      <img className="movieimg moviecard" id={props.imdbid} src={props.poster} alt={props.title} />
      {/* <p className="movietitle" >
        {props.title} ({props.year})
      </p> */}
    </div>
  )
}

export default MovieCard
