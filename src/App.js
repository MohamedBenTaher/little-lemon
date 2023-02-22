
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import BookingPage from './components/BookingPage/BookingPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/booking' element={<BookingPage />} />
        </Routes>
      </Router>
      <Footer /></>
  );
}

export default App;
