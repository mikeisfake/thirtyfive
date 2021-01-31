import React from 'react'
import { Link } from 'react-router-dom'

const Menu = props => {
  return (
    <div className="menucontainer">
      <Link to='/search'>
        search
      </Link>
      <Link to='/about'>
        about
      </Link>
    </div>
      )
};
export default Menu
