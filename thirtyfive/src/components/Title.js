import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from './Menu'

const Title = props => {
  return (
    <div className="titlebar flex">
      <Link to='/'>
        <h1 className="title">THIRTY<span>FIVE</span></h1>
      </Link>
      <Menu />
    </div>
      )
};
export default Title
