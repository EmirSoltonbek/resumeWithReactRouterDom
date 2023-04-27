import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='container'>
        <div className='navbar'>
            <Link to='/'>Home</Link>
            <Link to='/aboutme'>About me</Link>
            <Link to='/contacts'>Contacts</Link>
            <Link to='/addcomment'>Add comment</Link>
            <Link to='/seecomment'>See comment</Link>
        </div>
    </div>
  )
}

export default Header