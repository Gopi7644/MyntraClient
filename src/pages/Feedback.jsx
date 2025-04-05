import React, { useContext } from 'react';
import { DataContext } from '../Context/Context';
import axios from 'axios';

const Feedback = () => {
  const { userData, setUserData } = useContext(DataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    setUserData(data);
    const res = await axios.post('http://localhost:8000/api/feedback', data);
    res.status === 200 && alert('Feedback submitted successfully!');
    setUserData({});
    e.target.reset();
  };

  return (
    <div className="flex justify-center items-center min-h-[screen] bg-[#f7f3ec] px-4 pt-24 pb-16">
      {/* Added `pt-24` for header spacing and `pb-16` for footer spacing */}
      <div className="relative w-full max-w-md">
        {/* Envelope bottom */}
        <div
          className="absolute bottom-0 left-0 w-full h-48 bg-blue-700 rounded-b-lg z-0"
          style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
        ></div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white relative z-10 rounded-lg shadow-lg px-8 py-10 mb-10"
        >
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Contact Us
          </h2>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              E-mail <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="location"
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="feedback"
              rows="4"
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition-all duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
