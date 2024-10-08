import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import DashboardPage from './pages/DashboardPage';
import './index.css';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  </Router>
);

export default App;
