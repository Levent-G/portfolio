import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./layouts/Footer";
import PdfPages from "./components/pdf/PdfPages";
import Homepage from "./pages/homePage/Homepage";
import BlogContent from "./pages/blog/BlogContent";
import Blog from "./pages/blog/Blog";
import { ThemeProvider } from "./context/ThemeContext";
import BlogEkleMain from "./pages/blog/blogEkle/BlogEkleMain";
import TopBar from "./layouts/Nav";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <BrowserRouter>
          <TopBar />
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
