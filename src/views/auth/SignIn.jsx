import InputField from "components/fields/InputField";
import Checkbox from "components/checkbox";
import React, { useState } from 'react';
import client from "api/axios"
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await client.post('/login', {
        email_address: email,
        password: password,
      });
      const authToken = response.data.data.token;
      localStorage.setItem('authToken', authToken);
      navigate('/ess');
    } catch (error) {
      // Handle login error
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error('Server responded with an error status:', error.response.status);
        console.error('Error message from server:', error.response.data.message);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received from the server');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error setting up the request:', error.message);
      }
    }
  };

  return (
    <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-semibold text-navy-700 dark:text-white">
          Sign In
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600">
          Enter your email and password to sign in!
        </p>
        {/* Email */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Email"
          id="email"
          type="email"
          onChange={handleEmailChange}
        />

        {/* Password */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Password"
          id="password"
          type="password"
          onChange={handlePasswordChange}
        />
        {/* Checkbox */}
        <div className="mb-4 flex items-center justify-between px-2">
          <div className="flex items-center">
            <Checkbox />
            <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
              Keep me logged In
            </p>
          </div>
          <a
            className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
            href=" "
          >
            Forgot Password?
          </a>
        </div>
        <button className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200" onClick={handleFormSubmit}>
          Sign In
        </button>
      </div>
    </div>
  );
}
