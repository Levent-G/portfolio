import React from 'react'
import Header from '../components/Header'
import AboutMe from "../components/AboutMe"
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Contact from '../components/Contact'

import PortfolioCardList from '../components/PortfolioCardList'
const Homepage = () => {
  return (
    <div>
      <Header/>
      <AboutMe/>
      <Skills/>
      <Experience/>
      <PortfolioCardList/>
      <Education/>
      <Contact/>
     
     
    </div>
  )
}

export default Homepage