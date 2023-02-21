import React from 'react'
import styles from './Footer.css'
import Logo from '../../assets/Logo'
const Footer = () => {
    return (
        <footer style={styles}>
            <div className='logo'>
                <Logo />
            </div>
            <ul>
                <li>Doormat</li>
                <li>Navigation</li>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Reservation</a></li>
                <li><a href="#">Order Reservation</a></li>
                <li><a href="#">Login</a></li>
            </ul>

            <ul>
                <li>Contact</li>
                <li><a href="#">Phone Number</a></li>
                <li><a href="#">Address</a></li>
                <li><a href="#">email</a></li>
            </ul>
            <ul>
                <li>Social Media Links</li>
                <li><a href="#">Phone Number</a></li>
                <li><a href="#">Address</a></li>
                <li><a href="#">email</a></li>
            </ul>
        </footer>
    )
}

export default Footer