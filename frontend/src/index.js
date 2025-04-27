import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // needed for routing
import App from './App'; // your real App
import { testBackendConnection } from './api';

// Separate small connection test (optional but clean)
const ConnectionTester = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await testBackendConnection();
        console.log('Backend Response:', data);
      } catch (error) {
        console.error('Backend connection failed');
      }
    };

    fetchData();
  }, []);

  return null; // we don't want to render anything here
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ConnectionTester />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
