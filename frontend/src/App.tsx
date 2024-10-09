import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Dashboard from '../src/components/Dashboard';
import Requests from '../src/components/Requests';
import Feedbacks from '../src/components/Feedbacks';
import Reports from '../src/components/Reports';
import Patients from '../src/components/Patients';
import Settings from '../src/components/Settings';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/feedbacks" element={<Feedbacks />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default App;
