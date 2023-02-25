import React from 'react'
import styles from './confirmedbooking.css'
import ButtonPrimary from '../Button/ButtonPrimary'
const ConfirmedBooking = ({ navigate }) => {
    return (
        <div style={styles}>
            <div className='confirmed-booking'>
                <h2>Booking Confirmed</h2>
                <ButtonPrimary navigate={navigate} home content={'Back to Orders'} />
            </div>
        </div>
    )
}

export default ConfirmedBooking