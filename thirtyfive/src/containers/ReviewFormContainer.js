import React, { useState } from 'react'
import MovieDetail from '../components/MovieDetail'
import ReviewForm from '../components/ReviewForm'

const ReviewFormContainer = () => {
  return (
    <div className="reviewformcontainer">
      <MovieDetail />
      <ReviewForm />
    </div>
  )
}

export default ReviewFormContainer
