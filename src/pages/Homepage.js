import React from 'react'
import Header from '../components/Header'
import AboutMe from "../components/AboutMe"
import Skills from '../components/Skills'
import MyProject from '../components/MyProject'
import Education from '../components/Education'
import { useData } from '../context/DataContext';
import Contact from '../components/Contact'


const Homepage = () => {
  /* SKILLS DATA START */
  const { skilssData } = useData();
  /* SKILLS DATA END */
  /* MYPROJECT DATA START */
  const { myProjectData } = useData();
  /* MYPROJECT DATA END */

  return (
    <div>
      <Header />
      <AboutMe />
      <Skills skilssData={skilssData} />
      <MyProject myProjectData={myProjectData} />
      <Education />
      <Contact />
    </div>
  );
}

export default Homepage