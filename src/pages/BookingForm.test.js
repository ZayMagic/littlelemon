// BookingForm.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm - HTML5 Validation Attributes', () => {
  beforeEach(() => {
    render(<BookingForm />);
  });

  test('renders name input with required attribute', () => {
    const nameInput = screen.getByLabelText(/Name/i);
    expect(nameInput).toBeRequired();
  });

  test('renders email input with type="email" and required', () => {
    const emailInput = screen.getByLabelText(/Email/i);
    expect(emailInput).toHaveAttribute('type', 'email');
    expect(emailInput).toBeRequired();
  });

  test('renders date input with required attribute', () => {
    const dateInput = screen.getByLabelText(/Date/i);
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toBeRequired();
  });

  test('renders time select with required attribute', () => {
    const timeSelect = screen.getByLabelText(/Time/i);
    expect(timeSelect).toBeRequired();
  });

  test('renders number of guests input with min/max and required', () => {
    const guestsInput = screen.getByLabelText(/Number of Guests/i);
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
    expect(guestsInput).toBeRequired();
  });

  test('renders occasion select with required attribute', () => {
    const occasionSelect = screen.getByLabelText(/Occasion/i);
    expect(occasionSelect).toBeRequired();
  });
});

describe('BookingForm - Form Behavior', () => {
  beforeEach(() => {
    render(<BookingForm />);
  });

  test('shows invalid state if form is submitted empty', () => {
    const submitButton = screen.getByRole('button', { name: /Make Your reservation/i });
    fireEvent.click(submitButton);

    const nameInput = screen.getByLabelText(/Name/i);
    expect(nameInput.validity.valid).toBe(false);
  });

  test('submits successfully when all fields are filled', () => {
    const nameInput = screen.getByLabelText(/Name/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const dateInput = screen.getByLabelText(/Date/i);
    const timeSelect = screen.getByLabelText(/Time/i);
    const guestsInput = screen.getByLabelText(/Number of Guests/i);
    const occasionSelect = screen.getByLabelText(/Occasion/i);
    const submitButton = screen.getByRole('button', { name: /Make Your reservation/i });

    // Fill the form
    fireEvent.change(nameInput, { target: { value: 'Isaiah' } });
    fireEvent.change(emailInput, { target: { value: 'isaiah@example.com' } });
    fireEvent.change(dateInput, { target: { value: '2025-08-10' } });
    fireEvent.change(timeSelect, { target: { value: '18:00' } });
    fireEvent.change(guestsInput, { target: { value: '4' } });
    fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

    // Submit the form
    fireEvent.click(submitButton);

    expect(nameInput.validity.valid).toBe(true);
    expect(emailInput.validity.valid).toBe(true);
    expect(dateInput.validity.valid).toBe(true);
    expect(timeSelect.validity.valid).toBe(true);
    expect(guestsInput.validity.valid).toBe(true);
    expect(occasionSelect.validity.valid).toBe(true);
  });
});
