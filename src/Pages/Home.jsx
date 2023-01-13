import React from 'react'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar/Navbar'
import Cards from '../components/Cards/Cards'
import Services from '../components/Services/Services'
import Video from '../components/Video/Video'
import Reach from '../components/Reach/Reach'
import Experience from '../components/Experience/Experience'
import Footer from '../components/Footer/Footer'


const Home = () => {
  return (
    <div className=''>
        <Navbar/>
        <Hero/>
        <Cards/>
        <Services/>
        <Video/>
        <Reach/>
        <Experience/>
        <Footer/>
    </div>
  )
}

export default Home