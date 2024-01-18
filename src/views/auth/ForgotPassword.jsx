import InputField from "components/fields/InputField";
import React, { useState } from 'react';
import client from "api/axios"
import Alert from "components/alert/Alert";
import { Link } from 'react-router-dom';

export default function SignIn() {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await client.post('/forgot-password', {
        email_address: email,
      });
      alert(response.data.message);
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
        <h4 className="mb-2.5 text-4xl font-semibold text-navy-700 dark:text-white">
            Forgot your password?
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600">
            No problem. Just let us know your email address and we'll email you a password reset link that will allow you to choose a new one.
        </p>

        {error && <Alert
          type="error"
          description={error}
          extraClass="mb-4"
        />}        

        <InputField
          variant="auth"
          extra="mb-3"
          label="Email"
          id="email"
          type="email"
          onChange={handleEmailChange}
        />

        <button className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200" onClick={handleFormSubmit}>
          Send Password Link
        </button>
        <Link
            to="/auth/login"
            className="block text-center text-blue-500 hover:underline pt-4"
        >
          Go back to Login
        </Link>
      </div>
    </div>
  );
}
