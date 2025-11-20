import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    // Frontend validation
    if (password !== confirmPassword) {
      alert("Password & Confirm Password match nahi kar rahe!");
      return;
    }

    try {
      // Backend expects confirmPassword too
      const res = await axios.post("http://localhost:9191/api/auth/register", {
        name,
        email,
        password,
        confirmPassword,
      });

      alert("Registration Successful!");
      console.log(res.data);

      // Optional: Reset form
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

    } catch (error) {
      // Backend response error
      alert(error.response?.data || "Something went wrong");
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />

      <div
        className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2019/07/09/07/01/background-4326353_1280.jpg')",
        }}
      >
        <div className="w-full max-w-md bg-white bg-opacity-90 p-8 rounded-lg shadow-lg border border-white">
          <h2 className="text-2xl text-blue-600 font-bold mb-6 text-center">
            Register for Your Dream Tour
          </h2>

          <form className="flex flex-col gap-4" onSubmit={handleRegister}>
            <div className="flex flex-col">
              <label className="mb-1 text-gray-700">Full Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-gray-700">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-gray-700">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-gray-700">Confirm Password</label>
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Register Now
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
