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
        {loading && <LoadingPage />}
        <BrowserRouter>
          <Nav />
          <ColorPickerComponent />
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/blogcontent/:blogBaslik" element={<BlogContent />} />
            <Route path="/pdf" element={<PdfPages />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
