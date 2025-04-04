import React, { useContext } from 'react';
import { DataContext } from '../Context/Context';
import axios from 'axios';

const Feedback = () => {
  const {userData, setUserData} = useContext(DataContext)
  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    setUserData(data);
    console.log('Feedback submitted:', data);
    const res = await axios.post('https://myntraserver-oskf.onrender.com/api/feedback', data)
    res.status === 200 && 
    alert('Feedback submitted successfully!'); // Check if the response status is 200 (OK) and display a success message
    setUserData({})
    e.target.reset(); // Reset the form fields after submission
  };
  // console.log(userData)
  
  return (
    <section className='text-center my-10 px-4 sm:px-6 lg:px-8'>
      <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800'>Feedback</h1>
      <p className='text-sm sm:text-base lg:text-lg text-gray-600 mt-2'>We value your feedback. Please let us know your thoughts!</p>
      <form onSubmit={handleSubmit} className='mt-6 max-w-2xl mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <input
            type='text'
            name='name'
            placeholder='Your Name'
            className='w-full border border-gray-300 rounded-lg p-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            required
          />
          <input
            type='email'
            name='email'
            placeholder='Your Email'
            className='w-full border border-gray-300 rounded-lg p-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            required
          />
          <input
            type='tel'
            name='phone'
            placeholder='Your Phone'
            className='w-full border border-gray-300 rounded-lg p-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            required
          />
          <input
            type='text'
            name='location'
            placeholder='Where you from?'
            className='w-full border border-gray-300 rounded-lg p-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            required
          />
        </div>
        <textarea
          name='feedback'
          rows='4'
          cols={30}
          placeholder='Your feedback...'
          className='w-full h-32 sm:h-40 lg:h-48 border border-gray-300 rounded-lg p-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mt-4'
          required
        />
        <button
          type='submit'
          className='mt-4 w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-6 py-2 sm:px-8 sm:py-3 transition duration-300 ease-in-out'>
          Submit
        </button>
      </form>
    </section>
  );
};

export default Feedback;