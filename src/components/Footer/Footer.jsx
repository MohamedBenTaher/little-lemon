import React from 'react'
import styles from './Footer.css'
import Logo from '../../assets/Logo'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <footer style={styles}>
            <div className='footer'>
                <div className='logo'>
                    <Logo />
                </div>
                <ul>
                    <li>Doormat</li>
                    <li>Navigation</li>
                    <li> <Link to='/' ><a>Home</a></Link></li>
                    <li> <Link to='/' ><a>About</a></Link></li>
                    <li> <Link to='/' ><a>Menu</a></Link></li>
                    <li> <Link to='/booking' ><a>Reservation</a></Link></li>
                    <li> <Link to='/booking' ><a>Order Reservation</a></Link></li>
                    <li> <Link to='/' ><a>Login</a></Link></li>
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
            </div>
        </footer>

    )
}

export default Footer