import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useTeam } from './TeamContext'

export default function NavBar() {
    const { team } = useTeam();

    return (
         <div className="parent">
      <div className="navbar">
        <div className="nav-links">
          <div className='h'>
            <Link to='/'>Home</Link>
          </div>
          <div className='h'>
            <Link to='Plans'>Plans</Link>
          </div>
          <div className='h'>
            <Link to='About'>About</Link>
          </div>
        <div className='h'>
            <Link to='Contact'>Contact</Link>
        </div>
        <div className='h'>
            <Link to='team'>My Team ({team.length})</Link>
        </div>
        </div>
      </div>
      <div className='main-components'>
        <Outlet />
      </div>
    </div>

    )
}
