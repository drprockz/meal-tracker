import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Meal Tracker App</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  </header>
);

export default Header;
