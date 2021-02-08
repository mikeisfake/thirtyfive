import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import RandomMovie from '../components/RandomMovie'
import { getRandoms } from '../redux/actions/getRandoms'
import { setMovie } from '../redux/actions/setMovie'
import { Link } from 'react-router-dom'


const RandomMovieContainer = props => {

  const dispatch = useDispatch()
  const randoms = useSelector( state => state.randomMovies)

  useEffect(() => {
    dispatch(getRandoms())
  },[])

  const renderRandoms = () => {
    return (
      randoms.map( movie => (
        <Link to='/review'>
          <RandomMovie
            poster={movie.poster}
            id={movie.id}
            title={movie.title}
            year={movie.year}
            plot={movie.plot}
            show={handleClick}
          />
        </Link>
      ))
    )
  }

  const handleClick = event => {
    console.log(event.target.id)
    dispatch(setMovie(event.target.id));
  }

  return (
    <>
      <div className="randoms flex">
        <h1>random movies</h1>
        {renderRandoms()}
      </div>
    </>
  )
}

export default RandomMovieContainer
