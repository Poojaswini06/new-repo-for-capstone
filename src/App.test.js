// src/App.test.js

import React from 'react';
import { act } from 'react';
import { render, screen } from '@testing-library/react';
import { fetchAPI } from './api';
import BookingForm from './components/BookingForm';
import App, { initializeTimes, updateTimes } from './App';

jest.mock('./api'); // Mock the API module

test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={[]} dispatch={() => {}} submitForm={() => {}} />);
    const headingElement = screen.getByText(/book now/i); // Ensure this matches your heading
    expect(headingElement).toBeInTheDocument();
});

// Step 1: Update the test for initializeTimes
test('initializeTimes fetches available times for today', async () => {
    const mockTimes = ["17:00", "18:00"];
    fetchAPI.mockResolvedValueOnce(mockTimes); // Mock API response
    await act(async () => {
        const times = await initializeTimes(); // Ensure this handles async correctly
        expect(times).toEqual(mockTimes); // Assert the times are what we mocked
    });
});

// Step 2: Update the test for updateTimes
test('updateTimes sets the available times correctly', () => {
    const initialState = { availableTimes: ["17:00", "18:00"] };
    const action = { type: 'SET_TIMES', payload: ["19:00", "20:00"] }; // Example action
    const result = updateTimes(initialState, action);
    expect(result.availableTimes).toEqual(action.payload); // Assert that the available times have been updated
});

// Test for date update
test('updateTimes updates the selected date', () => {
    const initialState = { availableTimes: [], selectedDate: "" };
    const action = { type: 'UPDATE_DATE', date: "2024-10-20" }; // Example action
    const result = updateTimes(initialState, action);
    expect(result.selectedDate).toEqual(action.date); // Assert that the selected date has been updated
});
