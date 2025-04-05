import React, { useContext, useState } from 'react';
import { DataContext } from '../Context/Context';

const Feedback = () => {
  // const [errors, setErrors] = useState({});
  const { handleSubmit, errors, setErrors, handleFormSubmit } = useContext(DataContext);

  // const validateForm = (formData) => {
  //   const newErrors = {};
  //   if (!formData.get('name')) newErrors.name = 'Please fill your name.';
  //   if (!formData.get('email')) newErrors.email = 'Please fill your email.';
  //   if (!formData.get('phone')) newErrors.phone = 'Please fill your phone.';
  //   if (!formData.get('location')) newErrors.location = 'Please fill your location.';
  //   if (!formData.get('feedback')) newErrors.feedback = 'Please fill your message.';
  //   return newErrors;
  // };

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   const validationErrors = validateForm(formData);

  //   if (Object.keys(validationErrors).length > 0) {
  //     setErrors(validationErrors);
  //   } else {
  //     setErrors({});
  //     handleSubmit(e); // Call the context's handleSubmit function
  //   }
  // };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f7f3ec] px-4 pt-24 pb-16">
      <div className="relative w-full max-w-md">
        <form
          onSubmit={handleFormSubmit}
          className="bg-white relative z-10 rounded-lg shadow-lg px-8 py-10 mb-10"
        >
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Give Me Your Valuable Feedback
          </h2>

          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              E-mail <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Phone Field */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* Location Field */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="location"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
          </div>

          {/* Feedback Field */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="feedback"
              rows="4"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            {errors.feedback && <p className="text-red-500 text-sm mt-1">{errors.feedback}</p>}
          </div>

          {/* Submit Button */}
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
