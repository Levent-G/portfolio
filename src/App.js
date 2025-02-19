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
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const ProtectedRoute = ({ children }) => {
    return user ? children : <Navigate to="/ourdreams/login" />;
  };

  return (
    <div className="App">
      <ThemeProvider>
        {window.location.pathname !== "/ourdreams" && window.location.pathname !== "/ourdreams/login" && loading && <LoadingPage />}
        <BrowserRouter>
          {window.location.pathname !== "/ourdreams" && window.location.pathname !== "/ourdreams/login" && <Nav />}
          {window.location.pathname !== "/ourdreams" && window.location.pathname !== "/ourdreams/login" && <ColorPickerComponent />}
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blogcontent/:blogBaslik" element={<BlogContent />} />
            <Route path="/pdf" element={<PdfPages />} />
            <Route path="/blogekle/:blogerName" element={<BlogEkleMain />} />
            <Route path="/ourdreams/login" element={<Login />} />
            <Route path="/ourdreams" element={<ProtectedRoute><OurDreams /></ProtectedRoute>} />
          </Routes>
          {window.location.pathname !== "/ourdreams" && <Footer />}
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
