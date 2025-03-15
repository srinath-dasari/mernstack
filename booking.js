import React from "react";

const Booking = () => {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Book Your Ticket</h1>
      <form className="mt-4">
        <label className="block">Select Event:</label>
        <select className="border p-2 w-full">
          <option>Concert</option>
          <option>Movie</option>
          <option>Sports</option>
        </select>
        <button className="mt-4 bg-blue-500 text-white p-2 rounded">Book Now</button>
      </form>
    </div>
  );
};

export default Booking;
