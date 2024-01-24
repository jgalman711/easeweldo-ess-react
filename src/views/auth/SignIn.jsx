import InputField from "components/fields/InputField";
import Checkbox from "components/checkbox";
import React, { useState } from 'react';
import client from "api/axios"
import Alert from "components/alert/Alert";
import { Link } from "react-router-dom";
import eslogo from "assets/img/auth/logo.png";

export default function SignIn() {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleRemember = (event) => {
    setRememberMe(event.target.checked);
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await client.post('/login', {
        email_address: email,
        password: password,
        remember: rememberMe
      });
      const authToken = response.data?.data?.token;
      const employee = response.data?.data?.employee;
      const company = response.data?.data?.companies[0];

      localStorage.setItem('authToken', authToken);
      localStorage.setItem('companySlug', company.slug);
      localStorage.setItem('id', employee.id);
      localStorage.setItem('firstName', employee.first_name);
      localStorage.setItem('lastName', employee.last_name);
      localStorage.setItem('jobTitle', employee.job_title);
      localStorage.setItem('profilePicture', employee.profile_picture);

      window.location = '/ess';
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else if (error.request) {
        setError('No response received from the server');
      } else {
        setError('Error setting up the request:', error.message);
      }
    }
  };

  return (
    <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <img
          className="mb-4 h-9"
          src={eslogo}
          alt="Easeweldo Logo"
        />
        <p className="mb-9 text-xl font-semibold text-gray-800 dark:text-white">
          Login to Workhub
        </p>

        {error && <Alert
          type="error"
          description={error}
          extraClass="mb-4"
        />}

        <form onSubmit={handleFormSubmit}>
          <InputField
            variant="auth"
            extra="mb-3"
            label="Email"
            id="email"
            type="email"
            onChange={handleEmailChange}
          />

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
              <Checkbox
                onChange={handleRemember}
                checked={rememberMe}
              />
              <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
                Keep me logged In
              </p>
            </div>
            <Link
              to="/auth/forgot-password"
              className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
            >
              Forgot Password?
            </Link>
          </div>
          <button className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
