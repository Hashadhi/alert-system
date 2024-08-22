import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/reports">Reports</NavLink>
      <NavLink to="/alertLog">Alert Log</NavLink>
      <NavLink to="/map">Map</NavLink>
    </ul>
  );
};

export default Navbar;
