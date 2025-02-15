import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <ThemeProvider>
        {window.location.pathname !== "/ourdreams" && window.location.pathname !== "/leventinKalbi" &&loading && <LoadingPage />}
        <BrowserRouter>
          {/* Conditionally render Nav and Footer */}
          {window.location.pathname !== "/ourdreams" && window.location.pathname !== "/leventinKalbi" && <Nav />}
          {window.location.pathname !== "/ourdreams" && window.location.pathname !== "/leventinKalbi" && <ColorPickerComponent />}
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/blogcontent/:blogBaslik" element={<BlogContent />} />
            <Route path="/pdf" element={<PdfPages />} />
            <Route path="/blogekle/:blogerName" element={<BlogEkleMain />} />
            <Route path="/ourdreams" element={<OurDreams />} />
          </Routes>
          {/* Conditionally render Footer */}
          {window.location.pathname !== "/ourdreams" && window.location.pathname !== "/leventinKalbi" && <Footer />}
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
