import React, { useState } from 'react'
import ButtonPrimary from '../Button/ButtonPrimary'
import styles from './bookingform.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';

const BookingForm = ({ navigate, formData, handleChange, handleSubmit, availableTimes, errors, handleFocus }) => {

    console.log('errors', errors)
    console.log('formData', formData)
    return (
        <div style={styles}>

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
                        errors.ocassion = 'Ocasion is required';
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
                        <Form className='form'>
                            <label>
                                Date:
                                <Field type="date" name="date" />
                                <ErrorMessage name="date" render={(message) => (
                                    <div className="error">
                                        {message}
                                    </div>
                                )} />
                            </label>
                            <label>
                                Geusts:
                                <Field type="number" name="guests" />
                                <ErrorMessage name="guests" render={(message) => (
                                    <div className="error">
                                        {message}
                                    </div>
                                )} />
                            </label>
                            <label>
                                Occasion:
                                <Field as="select" name="ocassion" >
                                    <option value="">Select a time</option>
                                    <option value="Anniversary">Anniversary</option>
                                    <option value="Birthday">Birthday</option>
                                </Field>
                                <ErrorMessage name="ocassion" render={(message) => (
                                    <div className="error">
                                        {message}
                                    </div>
                                )} />
                            </label>

                            <label>
                                Time:
                                <Field as="select" name="time">
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
                            </label>
                            <button type="submit" disabled={isSubmitting} className={'primary-button'}>
                                Submit
                            </button>
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    )
}

export default BookingForm