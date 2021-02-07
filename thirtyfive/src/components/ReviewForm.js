import React from 'react'

const ReviewForm = props => {

  return (
      <form className="reviewform flex flex-col" onSubmit={props.onSubmit} id={props.movie.id}>
        <textarea value={props.review} onChange={props.onChange} name="body"></textarea>
        <br />
        <input type="submit"/>
      </form>
  )
}

export default ReviewForm
