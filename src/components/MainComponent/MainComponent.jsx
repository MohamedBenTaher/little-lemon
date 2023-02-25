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
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        date: new Date(),
        time: '',
        guests: 0,
        occasion: ''
    });
    const submitForm = (formData) => {

        if (submitAPI(formData)) {
            navigate('/booking-confirmed/');
        }
        else {
            navigate('/booking')
        }
    }
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]: value })
        if (name === 'date') {
            dispatch({ type: 'UPDATE_TIMES', payload: value });
        }
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
                    handleSubmit={submitForm}
                    bookings={bookings}
                    availableTimes={availableTimes}
                    dispatch={dispatch}
                    navigate={navigate}
                />} />
                <Route path='/booking-confirmed' element={<ConfirmedBooking navigate={navigate} />} />
            </Routes>

            <Footer />
        </>
    )
}

export default MainComponent