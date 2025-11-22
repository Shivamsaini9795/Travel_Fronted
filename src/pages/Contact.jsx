import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    try {
      // ✅ Backend URL
      const res = await axios.post(
        "http://localhost:9191/api/contact/send",
        form
      );

      if (res.status === 200) {
        setStatus("Message Sent Successfully!");
        setForm({ name: "", email: "", phone: "", message: "" });
      }
    } catch (err) {
      console.error(err.response || err.message);
      setStatus("Failed to Send Message!");
    }
  };

  return (
    <div className="w-full">

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-6">
        <h3 className="text-center text-xl md:text-2xl font-semibold">
          <a href="/" className="text-blue-600">Home</a> | Contact
        </h3>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Left Section */}
        <div className="space-y-6">

          <div>
            <h1 className="text-3xl font-bold">Contact Us</h1>
            <p className="text-gray-700 mt-2">
              Contact us to book your perfect journey to the place of your dreams,
              easily and quickly.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-lg font-semibold flex items-center gap-2">
              <i className="ri-message-2-line text-blue-600 text-2xl"></i>
              Send a message
            </p>
            <p className="text-gray-700 ml-8">Contact our support team</p>
          </div>

          <div className="space-y-2">
            <p className="text-lg font-semibold flex items-center gap-2">
              <i className="ri-phone-line text-blue-600 text-2xl"></i>
              You can contact our support 24/7
            </p>
            <p className="text-orange-500 text-3xl ml-8 font-bold">9795806401</p>
          </div>

          <div className="space-y-2">
            <p className="text-lg font-semibold flex items-center gap-2">
              <i className="ri-map-pin-line text-blue-600 text-2xl"></i>
              Visit our office
            </p>
            <p className="text-gray-700 ml-8">
              Adarsh Vihar Colony, Gomti Nagar, Lucknow
            </p>
          </div>

        </div>

        {/* Right Form Section */}
        <div className="bg-white shadow-lg rounded-xl p-8">
          <form className="space-y-5" onSubmit={handleSubmit}>

            <h1 className="text-3xl font-bold text-center mb-4">Contact To Us</h1>

            <div>
              <label className="font-semibold">Name:</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                className="w-full p-3 border rounded-lg mt-1 focus:outline-blue-500"
                required
              />
            </div>

            <div>
              <label className="font-semibold">Email:</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                className="w-full p-3 border rounded-lg mt-1 focus:outline-blue-500"
                required
              />
            </div>

            <div>
              <label className="font-semibold">Mobile_No:</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter Your Phone Number"
                className="w-full p-3 border rounded-lg mt-1 focus:outline-blue-500"
                required
              />
            </div>

            <div>
              <label className="font-semibold">Message:</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="3"
                className="w-full p-3 border rounded-lg mt-1 focus:outline-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold text-lg"
            >
              Send Message
            </button>

            {/* Status message below button */}
            {status && (
              <p
                className={`text-center py-2 mt-2 rounded-lg ${
                  status === "Message Sent Successfully!"
                    ? "bg-green-600 text-white"
                    : "bg-red-600 text-white"
                }`}
              >
                {status}
              </p>
            )}

          </form>
        </div>

      </div>

      {/* Google Map */}
      {/* <div className="w-full">
        <iframe
          className="w-full h-[500px] md:h-[600px]"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14232.076643018974!2d80.9546435!3d26.902887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1727021308476!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div> */}

    </div>
  );
};

export default Contact;
