
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import BookingPage from './components/BookingPage/BookingPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useReducer } from 'react';
function App() {
  const [bookings, setbookings] = useState([])
  const initialState =
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
  const [formData, setFormData] = useState({
    date: new Date(),
    time: '',
    guests: 0,
    occasion: ''
  });
  const handleSubmit = () => {

  }
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value })
    if (name === 'date') {
      dispatch({ type: 'UPDATE_TIMES', payload: value });
    }
  }
  const updateTimesReducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        const date = new Date(action.payload)
        state = getAvailableTimesForDate(date, initialState)
        return state;
      default:
        return state;
    }
  }
  function getAvailableTimesForDate(date, datetimes) {
    const filteredDatetimes = datetimes.filter(datetime => {
      const datetimeDate = new Date(datetime).toLocaleDateString();
      const selectedDate = new Date(date).toLocaleDateString();
      return datetimeDate === selectedDate;
    });

    // extract the time part of each datetime and return as an array
    const availableTimes = filteredDatetimes.map(datetime => {
      return new Date(datetime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    });

    return availableTimes;
  }

  function initializeTimes() {
    return ['10:00', '12:00', '14:00', '16:00'];
  }
  const [availableTimes, dispatch] = useReducer(updateTimesReducer, [], initializeTimes);

  return (
    <>

      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/booking' element={<BookingPage
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            bookings={bookings}
            availableTimes={availableTimes}
            dispatch={dispatch} />} />
        </Routes>
      </Router>
      <Footer /></>
  );
}

export default App;
