import React, { useState } from "react";

const BookingForm = ({availableTimes, dispatch, submitForm}) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [resTime, setResTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation confirmed for ${selectedDate} at ${resTime} for ${guests} guests. Occasion: ${occasion}`);
    const formData = {
      date: selectedDate,
      time: resTime,
      guests: guests,
      occasion: occasion
    };

    submitForm(formData);

    setSelectedDate('');
    setResTime('');
    setGuests(1);
    setOccasion('Birthday');
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setSelectedDate(newDate);
    dispatch({ type: 'UPDATE_DATE', payload: new Date(newDate) });
  };


  return (
    <>
      <h1 style={{ textAlign: 'center', marginTop: '2rem' }}>Let's Book!</h1>
      <section className="booking" style={{ display: 'flex', justifyContent: 'center' }}>
        <form
          style={{ display: 'grid', maxWidth: "300px", gap: "20px" }}
          onSubmit={handleSubmit}
        >
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            value={selectedDate}
            onChange={handleDateChange}
            required
          />

          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            value={resTime}
            onChange={(e) => setResTime(e.target.value)}
            required
          >
            <option value="" disabled>Select a time</option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>

          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            id="guests"
            min="1"
            max="10"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            required
          />

          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>

          <input type="submit" value="Make Your Reservation" />
        </form>
      </section>
    </>
  );
};

export default BookingForm;
