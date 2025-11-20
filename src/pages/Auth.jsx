import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

export default function AuthPage() {
  const [showRegister, setShowRegister] = useState(true);
  const [message, setMessage] = useState("");

  const BASE_URL = "http://localhost:9191"; // correct backend port

  const toggleForm = () => setShowRegister(!showRegister);

  // -------------------- REGISTER --------------------
  const handleRegister = async (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      confirmPassword: e.target.confirmPassword.value,
    };

    if (data.password !== data.confirmPassword) {
      setMessage("Password & Confirm Password do not match!");
      return;
    }

    try {
      await axios.post(`${BASE_URL}/api/auth/register`, data);
      setMessage("Registration Successful! Please Login.");
      setShowRegister(false);
    } catch (err) {
      setMessage(err.response?.data || "Registration Failed!");
    }
  };

  // -------------------- LOGIN --------------------
  const handleLogin = async (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      const res = await axios.post(`${BASE_URL}/api/auth/login`, data);

      setMessage("Login Successful!");

      // Save username for Navbar
      localStorage.setItem("userName", res.data.user.name);

      // ⭐ Redirect to HOME PAGE
      window.location.href = "/";

    } catch (err) {
      setMessage(err.response?.data || "Invalid Credentials!");
    }
  };

  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">

          {message && (
            <p className="text-center mb-3 text-green-600 font-bold">
              {message}
            </p>
          )}

          {showRegister ? (
            <>
              <h2 className="text-2xl text-blue-600 font-bold mb-6 text-center">
                Register for Your Dream Tour
              </h2>

              <form className="flex flex-col gap-4" onSubmit={handleRegister}>
                <input
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  className="input"
                  required
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="input"
                  required
                />

                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="input"
                  required
                />

                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  className="input"
                  required
                />

                <button className="btn">Register Now</button>
              </form>

              <p className="mt-4 text-center text-gray-600">
                Already have an account?{" "}
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={toggleForm}
                >
                  Login here
                </span>
              </p>
            </>
          ) : (
            <>
              <h2 className="text-2xl text-blue-600 font-bold mb-6 text-center">
                Login
              </h2>

              <form className="flex flex-col gap-4" onSubmit={handleLogin}>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="input"
                  required
                />

                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="input"
                  required
                />

                <button className="btn">Login</button>
              </form>

              <p className="mt-4 text-center text-gray-600">
                Don’t have an account?{" "}
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={toggleForm}
                >
                  Register here
                </span>
              </p>
            </>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
