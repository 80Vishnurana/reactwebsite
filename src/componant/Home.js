import React from 'react'
import banner from '../image/banner.jpeg'
import '../styles/HomeStyle.css';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <div className='home' style={{ backgroundImage: `url(${banner})` }}>
                <div className='headerContaner'>
                    <h1 className='heading'>Food Website</h1>
                    <p>Best Food In India</p>
                    <Link to='/menu'>
                        <button className='orderBtn'>Order Now</button>
                    </Link>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default Home
