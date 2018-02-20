import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <nav>
    <Link to="/new">New Snippet</Link>
    <Link to="/123">Snippet</Link>
  </nav>
)
export default Header
