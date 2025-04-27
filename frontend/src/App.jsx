import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import CareerForm from './pages/CareerForm';
import CareerResult from './pages/CareerResult';
import FeedbackForm from './pages/FeedbackForm';
import FeedbackReport from './pages/FeedbackReport';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/career-form" element={<CareerForm />} />
      <Route path="/career-result" element={<CareerResult />} />
      <Route path="/feedback-form" element={<FeedbackForm />} />
      <Route path="/feedback-report" element={<FeedbackReport />} />
    </Routes>
  );
}

export default App;
