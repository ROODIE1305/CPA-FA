import React, { useState } from 'react';
import { signUp } from '../auth';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    const { error } = await signUp(email, password);
    if (error) {
      setErrorMsg(error.message);
    } else {
      alert('Registration successful! 🎉 Please check your email to confirm.');
      window.location.href = '/login'; // Redirect after registration
    }
  };

  return (
    <div>
      <h2>Register</h2>
      {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br />
        <input
          type="password"
          placeholder="Password (at least 6 characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
