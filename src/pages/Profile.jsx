import React from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className='text-center my-30'>This is Profile page</div>
      <button
        className='bg-blue-500 text-white px-4 py-2  fixed right-30 rounded'
        onClick={() => navigate('/login')}>Login Page</button>
    </>
  )
}

export default Profile