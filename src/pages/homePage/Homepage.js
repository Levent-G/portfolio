import React, { useState, useEffect } from "react";
import Header from "./header/Header";
import AboutMe from "./aboutMe/AboutMe";
import Skills from "./skills/Skills";

import LoadingPage from "../../layouts/LoadingPage";
import MyProject from "./myProject/MyProject";
import Education from "./education/Education";
import Contact from "./contact/Contact";
import { Box } from "@mui/material";

const Homepage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <Box>
      <Header />
      <AboutMe />
      <Skills />
      <MyProject />
      <Education />
      <Contact />
    </Box>
  );
};

export default Homepage;
