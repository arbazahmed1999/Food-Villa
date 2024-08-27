import React from "react";

const Login = () => {
  return (
    <div className="login-container flex flex-col items-center">
      <h1 className="text-4xl font-semibold">Login</h1>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            className="border border-solid rounded-md  border-gray-300"
            type="text"
            id="username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            className="border border-solid rounded-md  border-gray-300"
            type="password"
            id="password"
            required
          />
        </div>
        <button
          className="btn Submit flex justify-center items-center px-3 py-1 bg-black hover:bg-gray-600 text-white rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
