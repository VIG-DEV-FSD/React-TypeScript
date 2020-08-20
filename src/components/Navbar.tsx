import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper px1 indigo darken-2">
        <a href="/" className="brand-logo">
          React + TypeScript
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">Todo List</NavLink>
          </li>
          <li>
            <NavLink to="/about">About us</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
