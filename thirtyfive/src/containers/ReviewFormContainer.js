import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MovieDetail from '../components/MovieDetail'
import ReviewForm from '../components/ReviewForm'
import Reviews  from '../components/Reviews'
import { persistMovie } from '../redux/actions/persistMovie'
import { createReview } from '../redux/actions/createReview'
import { getReviews } from '../redux/actions/getReviews'


const ReviewFormContainer = () => {

  const movie = useSelector(state => state.movie)
  const userMovie = useSelector(state => state.userMovie)
  const dispatch = useDispatch()
  const [review, setReview] = useState('')

  useEffect(() => {
    dispatch(persistMovie(movie))
  },[movie])


  const handleChange = event => {
    setReview(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    const movie_id = event.target.id
    const body = event.target.children[0].value
    dispatch(createReview(movie_id, body))
    dispatch(getReviews(movie_id))
    setReview('')
  }


  return (
    <div className="reviewformcontainer flex flex-row">
      {userMovie.id != null &&
        <>
          <MovieDetail />
          <ReviewForm  onChange={handleChange} onSubmit={handleSubmit} review={review} movie={userMovie}/>
          <Reviews movie={userMovie} />
        </>
      }
    </div>
  )
}

export default ReviewFormContainer
