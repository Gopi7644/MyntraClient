import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const navigate = useNavigate()
    const error = useRouteError()
    console.log(error) 

  return (
    <>
      <h1 className='text-center my-30'>Error 404: Page Not Found</h1>
      <button onClick={() => navigate('/')}>Go to Homepage</button>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  )
}

export default ErrorPage