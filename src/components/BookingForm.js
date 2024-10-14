import React, { useState, useEffect } from "react";
import '../CSS files/bookingForm.css';
import { fetchAPI } from "../api";


function BookingForm({ handleDateChange, submitForm }) {
    const [availableTimes, setAvailableTimes] = useState([]);
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        guests: 1,
        occasion: ""
    });

    useEffect(() => {
        const fetchTimes = async () => {
            if (formData.date) { // Only fetch available times if date is selected
                const times = await fetchAPI(formData.date);
                console.log('Fetched available times:', times); // Debugging log
                setAvailableTimes(times); // Update the state with fetched times
            } else {
                setAvailableTimes([]); // Reset available times if no date is selected
            }
        };

        fetchTimes();
    }, [formData.date]); // Run when the date in formData changes

    const handleChange = async (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });

        if (id === "date") {
            // Call the function to handle date change and fetch new available times
            await handleDateChange(value); // Call the new date handler
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        submitForm(formData);
    };

    return (
        <form className="form" style={{ display: "grid", maxWidth: "200px", gap: "20px" }} onSubmit={handleSubmit}>
            <h1>Book Now</h1>
            <label htmlFor="date">Choose date</label>
            <input
                type="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
            />

            <label htmlFor="time">Choose time</label>
            <select id="time" value={formData.time} onChange={handleChange}>
                <option value="">Select a time</option> {/* Default option */}
                {availableTimes.length > 0 && availableTimes.map((time) => (
                    <option key={time} value={time}>
                        {time}
                    </option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                id="guests"
                min="1"
                max="10"
                value={formData.guests}
                onChange={handleChange}
            />

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={formData.occasion} onChange={handleChange}>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            <input type="submit" className="submitForm" value="Make Your Reservation" />
        </form>
    );
}

export default BookingForm;
