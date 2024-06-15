import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./layouts/Nav";
import Footer from "./layouts/Footer";

import PdfPages from "./components/pdf/PdfPages";
import LoadingPage from "./layouts/LoadingPage";
import Homepage from "./pages/homePage/Homepage";
import BlogContent from "./pages/blog/BlogContent";
import Blog from "./pages/blog/Blog";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/blogcontent/:blogBaslik" element={<BlogContent />} />
          <Route path="/pdf" element={<PdfPages />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
