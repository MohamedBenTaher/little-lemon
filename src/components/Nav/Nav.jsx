import React from 'react'
import styles from './Nav.css'
import Logo from '../../assets/Logo'
const Nav = () => {
    return (
        <nav style={styles}>
            <Logo />
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Reservation</a></li>
                <li><a href="#">Order Reservation</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav