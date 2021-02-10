import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from './Button'
import { deleteReview } from '../redux/actions/deleteReview'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Review = props => {

  const dispatch = useDispatch()
  const trash = <FontAwesomeIcon icon={faTrash} />

  const handleClick = event => {
    console.log(event.target.id)
    dispatch(deleteReview(event.target.id))
  }

  return (
    <>
      <div className="reviewitem" key={props.id} id={props.id}>
        <p>
          {props.body}
        </p>
        <Button id={props.id} onClick={handleClick} value={trash} clazzName="deletebtn" />
      </div>
    </>
  )
}
