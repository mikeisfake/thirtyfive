import React from 'react'

export const Button = props => {
  return (
    <button onClick={props.onClick} id={props.id}>{props.value}</button>
  )
}
