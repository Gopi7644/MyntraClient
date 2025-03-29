import React from 'react'
import Carousel from '../components/Scroller'
import SecScroller from '../components/SecScroller'
import TopSection from '../components/TopSection'
import Category from '../components/Category'

const Home = () => {
  return (
    <>
      
      <TopSection />
      <SecScroller />
      <Carousel />
      <Category />
      
      {/* <SecScroller /> */}
    </>
  )
}

export default Home