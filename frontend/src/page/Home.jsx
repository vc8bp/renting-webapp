import React from 'react'
import Hero from '../component/Hero'
import NavBar from '../component/NavBar'
import About from '../component/About'
import Products from '../component/Products'
import ContectUs from "../component/ContectUs"
import Footer from "../component/Footer"

function Home() {
  return (
    <>
     <NavBar/>
     <Hero/>
     <About/>
     <Products title="Parts" backgroud="#f2f2f2"/>
     <Products title="Rents"/>
     <ContectUs/>
     <Footer/>
    </>
  )
}

export default Home