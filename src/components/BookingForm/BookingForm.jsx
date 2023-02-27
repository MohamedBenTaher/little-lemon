import React, { useState } from 'react'
import ButtonPrimary from '../Button/ButtonPrimary'
import styles from './bookingform.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';

const BookingForm = ({ navigate, formData, handleChange, handleSubmit, availableTimes, errors, handleFocus }) => {

    console.log('errors', errors)
    console.log('formData', formData)
    return (
        <div style={styles}>
            <h3 className='heading'>Book a Table</h3>
            <Formik
                initialValues={{ date: '', guests: '', ocassion: '', time: '' }}
                validate={(values) => {
                    const errors = {};
                    if (!values.date) {
                        errors.date = 'Date is required';
                    }
                    if (!values.guests) {
                        errors.guests = 'Guests is required';
                    } else if (values.guests > 15 || values.guests == 0) {
                        errors.guests = 'Please choose a valid value between 0 and 15';
                    }
                    if (!values.ocassion) {
                        errors.ocassion = 'Occasion is required';
                    }
                    if (!values.time) {
                        errors.time = 'Time is required';
                    }
                    return errors;
                }}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <div className='form-container'>
                        <Form className='form' data-testid="form">
                            <label htmlFor='date'>
                                Date:
                            </label>
                            <Field type="date" name="date" />
                            <ErrorMessage name="date" render={(message) => (
                                <div className="error">
                                    {message}
                                </div>
                            )} />

                            <label htmlFor='guests'>
                                Guests:
                            </label>
                            <Field type="number" name="guests" />
                            <ErrorMessage name="guests" render={(message) => (
                                <div className="error">
                                    {message}
                                </div>
                            )} />

                            <label htmlFor='occasion'>
                                Ocassion:
                            </label>
                            <Field as="select" name="ocassion" data-testid="occasion-input">
                                <option value="">Select a time</option>
                                <option value="Anniversary">Anniversary</option>
                                <option value="Birthday">Birthday</option>
                            </Field>
                            <ErrorMessage name="ocassion" render={(message) => (
                                <div className="error">
                                    {message}
                                </div>
                            )} />

                            <label htmlFor='time'>
                                Time:
                            </label>
                            <Field as="select" name="time" data-testid="time-input">
                                <option value="">Select a time</option>
                                {availableTimes.map((time, index) => (
                                    <option key={time} value={time}>
                                        {time}
                                    </option>
                                ))}
                            </Field>
                            <ErrorMessage name="time" render={(message) => (
                                <div className="error">
                                    {message}
                                </div>
                            )} />

                            <button type="submit" disabled={isSubmitting} className={'primary-button'}>
                                Make a Reservation
                            </button>
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    )
}

export default BookingForm