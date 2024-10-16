import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import { validateDate, validateTime, validateGuests, validateOccasion } from './components/Validation';

test('date input has the correct min attribute', () => {
    render(<BookingForm submitForm={jest.fn()} />);

    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toHaveAttribute('min', new Date().toISOString().split('T')[0]);
});

test('time select has the required attribute', () => {
    render(<BookingForm submitForm={jest.fn()} />);
    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toHaveAttribute('required');
});
test('guests input has the correct min and max attributes', () => {
    render(<BookingForm submitForm={jest.fn()} />);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
});
test('occasion select has the required attribute', () => {
    render(<BookingForm submitForm={jest.fn()} />);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toHaveAttribute('required');
});
describe('Validation Functions', () => {
    describe('validateGuests', () => {
        test('returns error message for guests less than 1', () => {
            expect(validateGuests(0)).toBe('Guests must be at least 1');
        });

        test('returns undefined for valid guest number', () => {
            expect(validateGuests(5)).toBeUndefined();
        });
    });

    describe('validateDate', () => {
        test('returns error message for empty date', () => {
            expect(validateDate('')).toBe('Date is required');
        });

        test('returns undefined for valid date', () => {
            const validDate = new Date().toISOString().split('T')[0];
            expect(validateDate(validDate)).toBeUndefined();
        });
    });

    describe('validateTime', () => {
        test('returns error message for empty time', () => {
            expect(validateTime('')).toBe('Time is required');
        });

        test('returns undefined for valid time', () => {
            expect(validateTime('18:00')).toBeUndefined();
        });
    });

    describe('validateOccasion', () => {
        test('returns error message for empty occasion', () => {
            expect(validateOccasion('')).toBe('Occasion is required');
        });

        test('returns undefined for valid occasion', () => {
            expect(validateOccasion('Birthday')).toBeUndefined();
        });
    });
});