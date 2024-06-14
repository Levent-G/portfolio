import React, { useState, useEffect } from 'react';
import Header from './header/Header'
import AboutMe from "./aboutMe/AboutMe"
import Skills from './skills/Skills'

import { useData } from '../../context/DataContext';
import LoadingPage from '../../layouts/LoadingPage';
import MyProject from './myProject/MyProject';
import Education from './education/Education';
import Contact from './contact/Contact';

const Homepage = () => {
  /* SKILLS DATA START */
  const { skilssData } = useData();
  /* SKILLS DATA END */
  /* MYPROJECT DATA START */
  const { myProjectData } = useData();
  /* MYPROJECT DATA END */
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simüle edilmiş bir yükleme işlemi
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <LoadingPage />;
  }


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