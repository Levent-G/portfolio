import React, { useState, useEffect } from 'react';
import Header from '../components/Header'
import AboutMe from "../components/AboutMe"
import Skills from '../components/Skills'
import MyProject from '../components/MyProject'
import Education from '../components/Education'
import { useData } from '../context/DataContext';
import Contact from '../components/Contact'
import LoadingPage from '../layouts/LoadingPage';

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