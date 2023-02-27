import React from 'react'
import styles from './Footer.css'
import Logo from '../../assets/Logo'
import footerLogo from '../../assets/footerLogo.jpg'
import { Link } from 'react-router-dom'
const Footer = ({ navigate }) => {
    return (
        <footer style={styles}>
            <div className='footer'>
                <a onClick={() => navigate('/')}>
                    <div className='logo'>
                        <img src={footerLogo} />
                    </div>
                </a>
                <ul className='first'>
                    <li>Doormat</li>
                    <li>Navigation</li>
                    <li> <Link to='/' ><a>Home</a></Link></li>
                    <li> <Link to='/' ><a>About</a></Link></li>
                    <li> <Link to='/' ><a>Menu</a></Link></li>
                    <li> <Link to='/booking' ><a>Reservation</a></Link></li>
                    <li> <Link to='/booking' ><a>Order Reservation</a></Link></li>
                    <li> <Link to='/' ><a>Login</a></Link></li>
                </ul>

                <ul className='second'>
                    <li>Contact</li>
                    <li><a href="#">Phone Number</a></li>
                    <li><a href="#">Address</a></li>
                    <li><a href="#">email</a></li>
                </ul>
                <ul className='second'>
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