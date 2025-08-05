import React from "react";
import BookingForm from "./BookingForm";
import { useNavigate } from "react-router-dom";

const BookingPage = ({ availableTimes, dispatch }) => {
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const success = window.submitAPI(formData);
    if (success) {
      navigate('/confirmation');
    }
  };

  return (
    <BookingForm
      availableTimes={availableTimes}
      dispatch={dispatch}
      submitForm={submitForm}
    />
  );
};

export default BookingPage;
