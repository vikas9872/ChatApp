import React from 'react';

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full px-4 py-2 mb-6 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
        >
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;
