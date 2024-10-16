import React, { useReducer, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Central from './components/Central';
import About from './components/About';
import Menu from './components/Menu';
import Reservations from './components/Reservations';
import OnlineOrder from './components/OnlineOrder';
import Login from './components/Login';
import BookingForm from './components/BookingForm';
import ConfirmedBooking from './components/ConfirmedBooking';
import { fetchAPI, submitAPI } from './api';
const initialState = {
    availableTimes: [],
};

export function updateTimes(state, action) {
    switch (action.type) {
        case 'SET_TIMES':
            return { ...state, availableTimes: action.payload };
        case 'UPDATE_DATE':
            return { ...state, selectedDate: action.date };
        default:
            return state;
    }
}

export const initializeTimes = async () => {
    const today = new Date().toISOString().split('T')[0];
    const times = await fetchAPI(today);
    return times;
};

function App() {
    const [state, dispatch] = useReducer(updateTimes, initialState);
    const navigate = useNavigate();

    const handleDateChange = async (date) => {
        const newAvailableTimes = await fetchAPI(date);
        dispatch({ type: 'SET_TIMES', payload: newAvailableTimes });
    };

    const submitForm = async (formData) => {
        const success = await submitAPI(formData);
        if (success) {
            navigate('/confirmBooking');
        } else {
            console.error('Submission failed');
        }
    };

    useEffect(() => {
        const fetchTimes = async () => {
            const times = await initializeTimes();
            dispatch({ type: 'SET_TIMES', payload: times });
        };

        fetchTimes();
    }, []);

    return (
        <>
            <Nav />
            <Header />
            <Routes>
                <Route path="/" element={<Central />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/reservations" element={<Reservations availableTimes={state.availableTimes} handleDateChange={handleDateChange} submitForm={submitForm} fetchAPI={fetchAPI} />} />
                <Route path="/orderonline" element={<OnlineOrder />} />
                <Route path="/login" element={<Login />} />
                <Route path="/bookingForm" element={<BookingForm availableTimes={state.availableTimes} handleDateChange={handleDateChange} submitForm={submitForm} />} />
                <Route path="/confirmBooking" element={<ConfirmedBooking />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
