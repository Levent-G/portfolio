import React from 'react'
import Header from '../components/Header'
import AboutMe from "../components/AboutMe"
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
const Homepage = () => {
  return (
    <div>
      <Header/>
      <AboutMe/>
      <Skills/>
      <Experience/>
      <Portfolio/>
      <Education/>
      <Contact/>
      <Footer/>
    
    </div>
  )
}

export default Homepage