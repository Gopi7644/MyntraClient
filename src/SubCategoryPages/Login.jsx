import React from 'react'

const Login = () => {
    return (
        <>
            <div className='text-center my-30 text-green-500'>Login here</div>
            <form action="" className='flex flex-col gap-4 w-[300px] mx-auto'>
                <input
                className='border border-gray-400 rounded p-2'
                type="text" 
                placeholder='email' />
                <input 
                className='border border-gray-400 rounded p-2'
                type="text" 
                placeholder='password' />
            </form>
        </>
    )
}

export default Login