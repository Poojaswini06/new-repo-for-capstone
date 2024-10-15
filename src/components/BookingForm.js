import React, { useState, useEffect } from "react";
import '../CSS files/bookingForm.css';
import { fetchAPI } from "../api";

function BookingForm({ submitForm }) {
    const [availableTimes, setAvailableTimes] = useState([]);
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        guests: 1,
        occasion: ""
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const fetchTimes = async () => {
            if (formData.date) {
                const times = await fetchAPI(formData.date);
                setAvailableTimes(times);
            } else {
                setAvailableTimes([]);
            }
        };

        fetchTimes();
    }, [formData.date]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });

        // Clear any error message when the user changes a field
        setErrors({
            ...errors,
            [id]: ""
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform validation
        const newErrors = {};
        if (!formData.date) newErrors.date = "Date is required";
        if (!formData.time) newErrors.time = "Time is required";
        if (formData.guests < 1) newErrors.guests = "Guests must be at least 1";
        if (!formData.occasion) newErrors.occasion = "Occasion is required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            console.log("Form Data Submitted:", formData);
            submitForm(formData);
        }
    };

    return (
      <section>
        <form className="form" style={{ display: "grid", maxWidth: "200px", gap: "20px" }} onSubmit={handleSubmit}>
            <h1>Book Now</h1>

            <label htmlFor="date">Choose date</label>
            <input
                type="date"
                id="date"
                aria-label="Choose a date"
                value={formData.date}
                min={new Date().toISOString().split('T')[0]}
                onChange={handleChange}
                required
            />
            {errors.date && <span className="error">{errors.date}</span>}

            <label htmlFor="time">Choose time</label>
            <select id="time" value={formData.time} onChange={handleChange} aria-label="Choose a time" required>
                <option value="">Select a time</option>
                {availableTimes.map((time) => (
                    <option key={time} value={time}>
                        {time}
                    </option>
                ))}
            </select>
            {errors.time && <span className="error">{errors.time}</span>}

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                id="guests"
                min="1"
                max="10"
                value={formData.guests}
                onChange={handleChange}
                aria-label="Number of guests"
                required
            />
            {errors.guests && <span className="error">{errors.guests}</span>}

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={formData.occasion} onChange={handleChange} aria-label="Select an occasion" required>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>
            {errors.occasion && <span className="error">{errors.occasion}</span>}

            <input
                type="submit"
                className="submitForm"
                value="Make Your Reservation"
                aria-label="Submit the form"
                disabled={!formData.date || !formData.time || !formData.guests || !formData.occasion}
            />
        </form>
        </section>
    );
}

export default BookingForm;
