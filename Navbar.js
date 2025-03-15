import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <Link to="/" className="font-bold">Ticket Booking</Link>
      <div>
        <Link to="/booking" className="mx-2">Book</Link>
        <Link to="/dashboard" className="mx-2">Dashboard</Link>
        <Link to="/login" className="mx-2">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
