// src/App.test.js

import React from 'react';
import { act } from 'react';
import { render, screen } from '@testing-library/react';
import { fetchAPI } from './api';
import BookingForm from './components/BookingForm';
import App, { initializeTimes, updateTimes } from './App';

jest.mock('./api'); 

test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={[]} dispatch={() => {}} submitForm={() => {}} />);
    const headingElement = screen.getByText(/book now/i); 
    expect(headingElement).toBeInTheDocument();
});


test('initializeTimes fetches available times for today', async () => {
    const mockTimes = ["17:00", "18:00"];
    fetchAPI.mockResolvedValueOnce(mockTimes); 
    await act(async () => {
        const times = await initializeTimes(); 
        expect(times).toEqual(mockTimes); 
    });
});


test('updateTimes sets the available times correctly', () => {
    const initialState = { availableTimes: ["17:00", "18:00"] };
    const action = { type: 'SET_TIMES', payload: ["19:00", "20:00"] }; 
    const result = updateTimes(initialState, action);
    expect(result.availableTimes).toEqual(action.payload); 
});


test('updateTimes updates the selected date', () => {
    const initialState = { availableTimes: [], selectedDate: "" };
    const action = { type: 'UPDATE_DATE', date: "2024-10-20" }; 
    const result = updateTimes(initialState, action);
    expect(result.selectedDate).toEqual(action.date);
});
