import React, { useState } from 'react';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Outlet, NavLink } from 'react-router-dom'
function Navbar() {
    const [menuIcon, setMenuIcon] = useState(false)

    return (
        <div>
            <div className="navbar">
                <div className='logo'>
                    < FastfoodIcon />
                    <h2>My Resturant</h2>
                </div>
                <button className='btn' onClick={() => setMenuIcon(true)}><MenuIcon /></button>
                <ul className='navul'>

                    <li className='navli'>
                        <NavLink activeClassName='active' to={'/'}>Home</NavLink>
                    </li>
                    <li className='navli'>
                        <NavLink to={'/menu'}>Menu</NavLink>
                    </li>
                    <li className='navli'>
                        <NavLink to={'/about'}>About</NavLink>
                    </li>
                    <li className='navli'>
                        <NavLink to={'/contact'}>Contact</NavLink>
                    </li>
                </ul>
            </div>

            {menuIcon &&
                <div className='navicon' >
                    <ul className='navull'>
                        <button className='closeBtn' onClick={() => setMenuIcon(false)}><CloseIcon /></button>

                        <li className='navlii'>
                            <NavLink activeClassName='active' onClick={() => setMenuIcon(false)} to={'/'}>Home</NavLink>
                        </li>
                        <li className='navlii'>
                            <NavLink onClick={() => setMenuIcon(false)} to={'/menu'}>Menu</NavLink>
                        </li>
                        <li className='navlii'>
                            <NavLink onClick={() => setMenuIcon(false)} to={'/about'}>About</NavLink>
                        </li>
                        <li className='navlii'>
                            <NavLink onClick={() => setMenuIcon(false)} to={'/contact'} style={{ cursor: "pointer" }} >Contact</NavLink>
                        </li>
                    </ul>
                </div>
            }
            <div>
                <Outlet />
            </div>


        </div >
    )
}

export default Navbar
