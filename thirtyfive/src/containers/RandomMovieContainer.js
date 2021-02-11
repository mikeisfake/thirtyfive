import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import RandomMovie from '../components/RandomMovie'
import { getRandoms } from '../redux/actions/getRandoms'
import { setMovieFromDB } from '../redux/actions/setMovieFromDB'
import { Link } from 'react-router-dom'
import { Fade } from "react-awesome-reveal";


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
    dispatch(setMovieFromDB(event.target.id));
    window.scrollTo(0,0)
    dispatch(getRandoms())
  }

  return (
    <>
      <div className="randoms flex">
        <h1>random movies</h1>
        <Fade cascade={true} damping={0.09}>
          {renderRandoms()}
        </Fade>
      </div>
    </>
  )
}

export default RandomMovieContainer
