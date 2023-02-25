import React, { useState } from 'react'
import ButtonPrimary from '../Button/ButtonPrimary'
import styles from './bookingform.css'

const BookingForm = ({ bookings, dispatch, formData, handleChange, handleSubmit, availableTimes, navigate }) => {

    console.log('availableTimes in form', availableTimes)
    return (
        <div style={styles}>
            <div className='form-container'>
                <div>
                    <h2 id='booking-title-id'>Book a Table</h2>
                </div>
                <form onSubmit={handleSubmit} className='form'>
                    <fieldset className='form-fields' >
                        <div className='form-field'>
                            <label htmlFor="res-date">Choose date</label>
                            <input type="date"
                                id="res-date"
                                name='date'
                                value={formData.date}
                                onChange={(e) => handleChange(e)} />
                        </div>
                        <div className='form-field'>
                            <label htmlFor="res-time">Choose time</label>
                            <select id="res-time " name='time' value={formData.time} onChange={(e) => handleChange(e)} >
                                {availableTimes?.map((time) => (
                                    <option key={time} value={time}>
                                        {time}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='form-field'>
                            <label htmlFor="guests">Number of guests</label>
                            <input type="number" placeholder="1" min="1" max="10" id="guests" name='guests' value={formData.guests} onChange={(e) => handleChange(e)} />
                        </div>
                        <div className='form-field'>
                            <label htmlFor="occasion">Occasion</label>
                            <select id="occasion" name='occasion' value={formData.occasion} onChange={(e) => handleChange(e)} >
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                        </div>
                        <div className='form-field'>
                            <ButtonPrimary content={'Make Your reservation'} submit />
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default BookingForm