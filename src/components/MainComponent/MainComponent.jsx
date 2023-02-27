import React from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import BookingPage from '../BookingPage/BookingPage';
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useReducer } from 'react';
import { fetchAPI, submitAPI } from '../../temp.js';
import ConfirmedBooking from '../ConfirmedBooking/ConfirmedBooking';
export const initialState =
    [new Date('2023-02-23T00:00:00'), // Today's date
    new Date('2023-02-24T00:00:00'),
    new Date('2023-02-25T00:00:00'),
    new Date('2023-02-26T00:00:00'),
    new Date('2023-02-27T00:00:00'),
    new Date('2023-02-28T00:00:00'),
    new Date('2023-03-01T00:00:00'),
    new Date('2023-03-02T00:00:00'),
    new Date('2023-03-03T00:00:00'),
    new Date('2023-03-04T00:00:00')]
export const updateTimesReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            if (!action.payload) return state;
            const date = new Date(action.payload)
            state = fetchAPI(date)
            return state;
        default:
            return state;
    }
}

export function initializeTimes() {
    const date = new Date();
    const times = fetchAPI(date)
    return times;
}
const MainComponent = ({ }) => {

    const [bookings, setbookings] = useState([])
    const [errors, setErrors] = useState({
        date: { message: 'please select a date', active: false },
        guests: { message: 'the number of guests shoild be more 0 and less than 15', active: false },
        occasion: { message: 'Time is required', active: false },
        time: { message: 'time isn`t avaliable for the chosen day', active: false },
    });

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: 0,
        occasion: ''
    });
    const validateForm = () => {
        let errors = {}
        let isValid = true;
        if (formData.guests.trim() === '') {
            errors.date = 'guests is required';
            isValid = false;
        }
        else if (formData.guests > 14) {
            errors.date = 'guests should be less than 15';
            isValid = false;
        }

        if (formData.time.trim() === '') {
            errors.time = 'Time is required';
            isValid = false;
        } else if (!availableTimes.includes(formData.time)) {
            errors.time = 'Selected time is not available';
            isValid = false;
        }

        setErrors(errors);

        return isValid;
    };
    const handleSubmit = async (values, { setSubmitting, setErrors }) => {
        try {
            console.log('submission')
            console.log('values', values)
            const response = submitAPI(values);
            if (response) {
                navigate('/booking-confirmed');
            } else {
                setErrors(response.errors);
            }
        } catch (error) {
            console.error(error);
            setSubmitting(false);
            setErrors({ submit: 'An error occurred. Please try again later.' });
        }
    };


    const validateField = (name, value) => {
        if (name === 'guests') {
            if (value == 0 || value > 14) {
                setErrors((errors) => ({ ...errors, guests: { ...errors.guests, active: true } }))
            }
            else {
                setErrors((errors) => ({ ...errors, guests: { ...errors.guests, active: false } }))
            }
        }
        if (name === 'date') {
            if (value == '') {
                setErrors((errors) => ({ ...errors, date: { ...errors.date, active: true } }))
            }
            else {
                setErrors((errors) => ({ ...errors, date: { ...errors.date, active: false } }))
            }
        }
        if (name === 'time') {
            if (value === '') {

                setErrors((errors) => ({ ...errors, time: { ...errors.time, active: true } }))
            } else if (!availableTimes.includes(value)) {
                setErrors((errors) => ({ ...errors, time: { ...errors.time, active: true } }))
            }
            else {
                setErrors((errors) => ({ ...errors, time: { ...errors.time, active: false } }))
            }
        }
        if (name === 'occasion') {
            if (value === '') {
                setErrors((errors) => ({ ...errors, occasion: { messsage: 'occasion is required', active: true } }))
            }
            else {
                setErrors((errors) => ({ ...errors, occasion: { messsage: 'occasion is required', active: false } }))
            }
        }
    }
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        validateField(name, value)
        setFormData({ ...formData, [name]: value })
        if (name === 'date') {
            dispatch({ type: 'UPDATE_TIMES', payload: value });
        }
    };
    const handleFocus = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        validateField(name, value)
    };
    const [availableTimes, dispatch] = useReducer(updateTimesReducer, [], initializeTimes);

    return (
        <>


            <Header />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/booking' element={<BookingPage
                    formData={formData}
                    handleChange={handleChange}
                    handleFocus={handleFocus}
                    handleSubmit={handleSubmit}
                    bookings={bookings}
                    availableTimes={availableTimes}
                    dispatch={dispatch}
                    navigate={navigate}
                    errors={errors}
                />} />
                <Route path='/booking-confirmed' element={<ConfirmedBooking navigate={navigate} />} />
            </Routes>

            <Footer />
        </>
    )
}

export default MainComponent