import React from 'react'
import Nav from '../Nav/Nav'
import styles from './header.css'
import Logo from '../../assets/Logo'
const Header = ({ navigate }) => {
    return (
        <header style={styles}>
            <div className='nav-section'>
                <a onClick={() => navigate('/')}>
                    <Logo />
                </a>

                <Nav />
            </div>
        </header>
    )
}

export default Header