import React, { useState } from 'react';
import BookingForm from './BookingForm';  // Import the BookingForm component
import '../CSS files/bookingForm.css';

const Reservations = ({ availableTimes, dispatch, submitForm, fetchAPI }) => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);  // Toggle the visibility of the form
  };

  return (
    <div className='reserve'>
      <h1>Reservations Page</h1>
      <button className="booking" onClick={toggleForm}>
        {showForm ? 'Close Form' : 'Click Here to Open the Form'}
      </button>

      {showForm && 
        <BookingForm 
          availableTimes={availableTimes} 
          dispatch={dispatch} 
          submitForm={submitForm} 
          fetchAPI={fetchAPI} // Pass fetchAPI as prop
        />}
    </div>
  );
};

export default Reservations;
