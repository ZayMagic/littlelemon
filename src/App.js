import React, {useReducer} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import About from './pages/About';
import Menu from './pages/Menu';
import BookingPage from './pages/BookingPage';
import Order from './pages/Order';
import Login from './pages/Login';
import ConfirmedBooking from './pages/ConfirmedBooking';
import './App.css';


// Reducer setup
const initializeTimes = () => {
  const today = new Date();
  return window.fetchAPI(today);
};

const updateTimes = (state, action) => {
  if(action.type === "UPDATE_DATE"){
    return window.fetchAPI(action.payload);
  }

  return state;

};


function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  console.log("fetchAPI is", window.fetchAPI);
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
        <Route path="/confirmation" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
