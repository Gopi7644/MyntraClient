import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({})
  const [activeMenu, setActiveMenu] = useState(null);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiData = async () => {
    try {
      // https://myntraserver-oskf.onrender.com/api/data
      // http://localhost:8000/api/data
      const data = await axios.get("https://myntraserver-oskf.onrender.com/api/data");
      setData(data.data)
      setLoading(false)
      // console.log(data.data)
    } catch (error) {
      console.log(error.message)
      setError(error.message)
      setLoading(false)
    }
  }
  useEffect(() => {
    apiData()
  }, [])

  
  const handleSubmit = async (e) => {

    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    setUserData(data);
    
    // http://localhost:8000/api/feedback
    const res = await axios.post('https://myntraserver-oskf.onrender.com/api/feedback', data);
    res.status === 200 && alert('Feedback submitted successfully!');
    setUserData({});
    e.target.reset();    
  };

  const validateForm = (formData) => {
    const newErrors = {};
    if (!formData.get('name')) newErrors.name = 'Fill your name.';
    if (!formData.get('email')) newErrors.email = 'Fill your email.';
    if (!formData.get('phone')) newErrors.phone = 'Fill your phone.';
    if (!formData.get('location')) newErrors.location = 'Fill your location.';
    if (!formData.get('feedback')) newErrors.feedback = 'Fill your message.';
    return newErrors;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      handleSubmit(e); // Call the context's handleSubmit function
    }
  };
  

  return (
    <DataContext.Provider value={{ data, setData, loading, setLoading, error, setError, activeMenu, setActiveMenu, userData, setUserData, handleSubmit, handleFormSubmit, errors, setErrors }}>
      {children}
    </DataContext.Provider>
  );
};
