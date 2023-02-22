import React from 'react'
import styles from './Customer.css'
import CustomerRating from '../Rating/CustomerRating'
const CustomerSays = () => {
    return (
        <div style={styles}>
            <div className='testimonals-section'>
                <div className='testimonals-section-upper'>
                    <h3>Testimonials</h3>
                </div>
                <CustomerRating />
            </div>
        </div>
    )
}

export default CustomerSays