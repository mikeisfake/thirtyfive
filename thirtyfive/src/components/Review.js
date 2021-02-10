import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from './Button'
import { deleteReview } from '../redux/actions/deleteReview'

export const Review = props => {

  const dispatch = useDispatch()

  const handleClick = event => {
    console.log(event.target.id)
    dispatch(deleteReview(event.target.id))
  }

  return (
    <>
      <div className="reviewitem" key={props.id} id={props.id}>{props.body}</div>
      <Button id={props.id} onClick={handleClick} value="delete" />
    </>
  )
}
