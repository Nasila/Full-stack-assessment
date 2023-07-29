import React, { useState } from 'react';
import './index.css';
const PasswordStrengthValidator = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const handleChange = (event) => {
    const password = event.target.value;
    setPassword(password);
    setStrength(getPasswordStrength(password));
  };

  const getPasswordStrength = (password) => {
    // Define regular expressions for different criteria
    const minLength = 6;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /\d/;

      // Check each criterion
      let isMinLength = false;
      let isUppercase = false;
      let isLowercase = false;
      let isNumber = false;
      if (password.length >= minLength) {
        isMinLength = true;
      }
      if (uppercaseRegex.test(password)) {
        isUppercase = true;
      }
      if (lowercaseRegex.test(password)) {
        isLowercase = true;
      }
      if (numberRegex.test(password)) {
        isNumber = true;
      }
      // Calculate the steps required
      let steps = 0;
      if(isMinLength) {
        if(!isUppercase )
          steps++;
        if(!isLowercase)
          steps++;
        if(!isNumber)
          steps++;
      } else if(password.length < minLength) {
        steps += minLength - password.length;
      }

      return `Need ${steps} more steps to make password strong`;
  };

  return (
    <div className='login-container'>
      <input
      className='login-input'
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={handleChange}
      />
      <p>Password Strength: {password ? strength : ''}</p>
    </div>
  );
};

export default PasswordStrengthValidator;

