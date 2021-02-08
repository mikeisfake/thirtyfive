import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getReviews} from '../redux/actions/getReviews'
import { Review } from './Review'

const Reviews = props => {

  const dispatch = useDispatch()
  const reviews = useSelector(state => state.currentReviews)

  const renderReviews = () => {
    return reviews.map(review => <Review body={review.body} />)
  }

  useEffect(() => {
    dispatch(getReviews(props.movie.id))
  },[props.movie])

  return (
    <div className="reviews">{renderReviews()}</div>
  )
}
export default Reviews
