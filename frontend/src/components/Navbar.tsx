import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800">
      <div>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'font-bold text-yellow-500' : 'text-white')}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/requests"
          className={({ isActive }) => (isActive ? 'font-bold text-yellow-500 ml-4' : 'text-white ml-4')}
        >
          Requests
        </NavLink>
        <NavLink
          to="/feedbacks"
          className={({ isActive }) => (isActive ? 'font-bold text-yellow-500 ml-4' : 'text-white ml-4')}
        >
          Feedbacks
        </NavLink>
        <NavLink
          to="/reports"
          className={({ isActive }) => (isActive ? 'font-bold text-yellow-500 ml-4' : 'text-white ml-4')}
        >
          Reports
        </NavLink>
        <NavLink
          to="/patients"
          className={({ isActive }) => (isActive ? 'font-bold text-yellow-500 ml-4' : 'text-white ml-4')}
        >
          Patients
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) => (isActive ? 'font-bold text-yellow-500 ml-4' : 'text-white ml-4')}
        >
          Settings
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
