import React from 'react'
import styles from './bookingpage.css'
import BookingForm from '../BookingForm/BookingForm'
const BookingPage = ({ navigate, bookings, dispatch, formData, handleChange, handleSubmit, availableTimes, handleFocus, errors }) => {
    console.log('dispatch', dispatch)
    return (
        <div style={styles}>
            <BookingForm bookings={bookings}
                dispatch={dispatch}
                formData={formData}
                handleChange={handleChange}
                availableTimes={availableTimes}
                handleSubmit={handleSubmit}
                errors={errors}
                navigate={navigate}
                handleFocus={handleFocus}
            />
        </div>
    )
}

export default BookingPage