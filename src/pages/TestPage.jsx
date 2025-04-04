import React from 'react'
import { useNavigate } from 'react-router-dom'
import MyComponent from './MyComponent'

const TestPage = () => {
  const navigate = useNavigate()

  const handleTestPage = () => {
    navigate(-1)
  }
  return (
    <>
      <div className='w-full p-[10px_20px] my-10'>
        <h1 className='text-center mt-30'>Welcome to test Page</h1>
        <MyComponent />
        <button
          className='bg-[#3d4152] text-white px-4 py-2 rounded-md mb-5 fixed right-30 top-30'
          onClick={handleTestPage}>Go Back</button>
      </div>
    </>
  )
}

export default TestPage