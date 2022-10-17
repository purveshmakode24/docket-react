import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <div style={{ padding: '20px', backgroundColor: 'lightblue' }}>
            <span className='mr-3' style={{ fontWeight: 600 }}>Docket</span>
            <NavLink to='/'>Tasks</NavLink> &nbsp;
            <NavLink to='/counter'>Counter</NavLink>
        </div>
    )
}
