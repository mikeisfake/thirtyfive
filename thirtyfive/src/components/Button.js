import React from 'react'

export const Button = props => {
  return (
    <button className={props.clazzName} onClick={props.onClick} id={props.id}>{props.value}</button>
  )
}
