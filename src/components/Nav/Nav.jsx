import React from 'react'
import styles from './Nav.css'
import { Link } from "react-router-dom";
const Nav = () => {
    return (
        <nav style={styles}>
            <ul>
                <li> <Link to='/' ><a>Home</a></Link></li>
                <li> <Link to='/' ><a>About</a></Link></li>
                <li> <Link to='/' ><a>Menu</a></Link></li>
                <li> <Link to='/booking' ><a>Reservation</a></Link></li>
                <li> <Link to='/booking' ><a>Order Reservation</a></Link></li>
                <li> <Link to='/' ><a>Login</a></Link></li>
            </ul>
        </nav>
    )
}

export default Nav