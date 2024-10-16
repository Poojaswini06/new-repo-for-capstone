import React, { useState } from 'react';
import BookingForm from './BookingForm';
import '../CSS files/bookingForm.css';

const Reservations = ({ availableTimes, dispatch, submitForm, fetchAPI }) => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className='reserve'>
      <h1 aria-label="Little Lemon Reservation Page">Reservations Page</h1>
      <button className="booking" onClick={toggleForm} aria-label={showForm ? 'Close the Booking Form' : 'Open the Booking Form'}>
        {showForm ? 'Close Form' : 'Click Here to Open the Form'}
      </button>

      {showForm &&
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
          fetchAPI={fetchAPI}
        />}
    </div>
  );
};

export default Reservations;
