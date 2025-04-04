import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [userData, setUserData] = useState({})
  const [activeMenu, setActiveMenu] = useState(null);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiData = async () => {
    try {
      const data = await axios.get('https://myntraserver-oskf.onrender.com/api/data')
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

  return (
    <DataContext.Provider value={{ data, setData, loading, setLoading, error, setError, activeMenu, setActiveMenu, userData, setUserData }}>
      {children}
    </DataContext.Provider>
  );
};
