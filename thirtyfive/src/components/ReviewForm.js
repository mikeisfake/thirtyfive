import React from 'react'

const ReviewForm = props => {

  return (
      <form className="reviewform flex flex-col" onSubmit={props.onSubmit} id={props.movie.id}>
        <textarea value={props.review} onChange={props.onChange} placeholder={`your review of ${props.movie.title}`} rows={9}></textarea>
        <br />
        <input type="submit" value="add review"/>
      </form>
  )
}

export default ReviewForm
