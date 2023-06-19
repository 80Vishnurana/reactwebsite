import React from 'react'
import '../App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Menu from './Menu'
import Contact from './Contact'

function Layout() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Navbar />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/menu' element={<Menu />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contact' element={<Contact />} />

                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Layout
