import React from 'react'
import Nav from '../Nav/Nav'
import styles from './header.css'
import Logo from '../../assets/Logo'
const Header = () => {
    return (
        <header style={styles}>
            <div className='nav-section'>
                <Logo />
                <Nav />
            </div>
        </header>
    )
}

export default Header