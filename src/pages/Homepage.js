import React from 'react'
import Header from '../components/Header'
import AboutMe from "../components/AboutMe"
import Skills from '../components/Skills'
import MyProject from '../components/MyProject'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Contact from '../components/Contact'

import PortfolioCardList from '../components/PortfolioCardList'
const Homepage = () => {
  return (
    <div>
      <Header/>
      <AboutMe/>
      <Education/>  
      <Experience/> 
      <Skills/>
      <MyProject/>
      <PortfolioCardList/>
   
      <Contact/>
     
     
    </div>
  )
}

export default Homepage