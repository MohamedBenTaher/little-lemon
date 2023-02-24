import React, { useState } from 'react'
import styles from './bookingform.css'
const BookingForm = ({ bookings, dispatch, formData, handleChange, handleSubmit, availableTimes }) => {
    console.log('bookings', bookings)
    return (
        <div style={styles}>
            <form onSubmit={handleSubmit}>
                <fieldset style={{ display: 'flex', maxWidth: '20%', flexDirection: 'column' }} >
                    <label htmlFor="res-date">Choose date</label>
                    <input type="date"
                        id="res-date"
                        name='date'
                        value={formData.date}
                        onChange={(e) => handleChange(e)} />
                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time " name='time' value={formData.time} onChange={(e) => handleChange(e)} >
                        {availableTimes.map((time) => (
                            <option key={time} value={time}>
                                {time}
                            </option>
                        ))}
                    </select>
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" name='guests' value={formData.guests} onChange={(e) => handleChange(e)} />
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" name='occasion' value={formData.occasion} onChange={(e) => handleChange(e)} >
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                    <input type="submit" value="Make Your reservation" />
                </fieldset>
            </form>
        </div>
    )
}

export default BookingForm