import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from "../AppLayout/Footer"
import TestPage from '../pages/TestPage'

const Layout = () => {
  return (
    <>
    <Header />
    {/* <TestPage /> */}
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout