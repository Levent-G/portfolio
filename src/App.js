import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { auth } from "./firebase/firebase"; 
import { onAuthStateChanged } from "firebase/auth";

import Nav from "./layouts/Nav";
import Footer from "./layouts/Footer";
import PdfPages from "./components/pdf/PdfPages";
import LoadingPage from "./layouts/LoadingPage";
import Homepage from "./pages/homePage/Homepage";
import BlogContent from "./pages/blog/BlogContent";
import Blog from "./pages/blog/Blog";
import { ThemeProvider } from "./context/ThemeContext";
import ColorPickerComponent from "./components/colorPicker/ColorPickerComponent";
import BlogEkleMain from "./pages/blog/blogEkle/BlogEkleMain";
import OurDreams from "./pages/deneme/OurDreams";
import Login from "./pages/deneme/Login/Login";

function App() {


  return (
    <div className="App">
      <ThemeProvider>
    
        <BrowserRouter>
   
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blogcontent/:bloguuid" element={<BlogContent />} />
            <Route path="/pdf" element={<PdfPages />} />
            <Route path="/blogekle/:blogerName" element={<BlogEkleMain />} />
        
          </Routes>
         <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
