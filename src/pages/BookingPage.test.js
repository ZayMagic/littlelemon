// BookingForm.test.js
import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { initializeTimes, updateTimes } from "../App"; // Adjust path as needed
import * as api from "../api"; // Adjust this to your actual api.js path

describe("Reducer functions", () => {
  test("initializeTimes returns values from fetchAPI", () => {
    // Mock fetchAPI to return fixed times
    jest.spyOn(api, "fetchAPI").mockReturnValue([
      "17:00",
      "18:00",
      "19:00",
    ]);

    const times = initializeTimes();
    expect(times).toEqual(["17:00", "18:00", "19:00"]);
  });

  test("updateTimes returns updated times from fetchAPI", () => {
    // Mock fetchAPI again
    jest.spyOn(api, "fetchAPI").mockReturnValue([
      "19:00",
      "20:00",
      "21:00",
    ]);

    const initialState = [];
    const action = { type: "update_times", date: new Date() };
    const newState = updateTimes(initialState, action);

    expect(newState).toEqual(["19:00", "20:00", "21:00"]);
  });
});
