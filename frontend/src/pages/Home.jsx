import React from 'react'
import Hero from '../components/Hero'
import Latestproduct from '../components/Latestproduct'
import Bestseller from '../components/Bestseller'
import Policies from '../components/Policies'

function Home() {
  return (
    <div>
      <Hero/>
      <Latestproduct/>
      <Bestseller/>
      <Policies/>
    </div>
  )
}

export default Home