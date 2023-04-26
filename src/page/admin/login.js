import { Navigate } from 'react-router-dom';
import logo from '../../assets/logo.png'
import React, { useState, useEffect } from 'react';
import axios from "axios";

const Login = ({}) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      window.location.href = "http://localhost:3000/admin-pkl";
    }
  }, []);
  

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('token', data.token);
      window.location.href = "http://localhost:3000/admin-pkl";
    } else {
      setError(data.message);
    }
  }

    return ( 
        <>
        <div className="flex min-h-screen align-middle items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 shadow-xl p-8 h-96 border rounded-xl">
          <div>
            <img className="mx-auto h-12 w-auto" src={logo} alt="Your Company" />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
          </div>
          <form onSubmit={handleSubmit}>
          <div className="mt-8 space-y-6" >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div className="">
                <label htmlFor="email" className="sr-only">Username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} id="email" name="text" type="text" required className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 px-4 outline-none" placeholder="Username" />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} id="password" name="password" type="password" required className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 px-4 outline-none" placeholder="Password" />
              </div>
            </div>
            <div>
              <button type="submit" className="group relative flex w-full justify-center rounded-md bg-pink-600 py-2 px-3 text-sm font-semibold text-white hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg className="h-5 w-5 text-pink-500 group-hover:text-pink-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                  </svg>
                </span>
                Sign in
              </button>
              {error && <div className="error">{error}</div>}
            </div>
          </div>
          </form>
        </div>
      </div>
        </>
     );
}
 
export default Login;