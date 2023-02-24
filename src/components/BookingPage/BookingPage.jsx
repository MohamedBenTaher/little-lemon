import React from 'react'
import styles from './bookingpage.css'
import BookingForm from '../BookingForm/BookingForm'
const BookingPage = ({ bookings, dispatch, formData, handleChange, handleSubmit, availableTimes }) => {
    console.log('dispatch', dispatch)
    return (
        <div style={styles}>
            <BookingForm bookings={bookings}
                dispatch={dispatch}
                formData={formData}
                handleChange={handleChange}
                availableTimes={availableTimes}
                handleSubmit={handleSubmit} />
        </div>
    )
}

export default BookingPage