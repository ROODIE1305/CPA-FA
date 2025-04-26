import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { testBackendConnection } from './api';

const App = () => {
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

  return (
    <React.StrictMode>
      <h1>Hello CPA-FA Frontend!</h1>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
