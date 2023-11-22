import React from 'react'
import Header from '../components/Header'
import AboutMe from "../components/AboutMe"
import Skills from '../components/Skills'
import MyProject from '../components/MyProject'
import Education from '../components/Education'

import Contact from '../components/Contact'


const Homepage = () => {
  return (
    <div>
      <Header/>
      <AboutMe/>
   

      <Skills/>
    
      <MyProject/>
      <Education/> 
  
   
      <Contact/>
     
     
    </div>
  )
}

export default Homepage