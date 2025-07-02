import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Footer from "./layouts/Footer";
import PdfPages from "./components/pdf/PdfPages";
import Homepage from "./pages/homePage/Homepage";
import BlogContent from "./pages/blog/BlogContent";
import Blog from "./pages/blog/Blog";
import { ThemeProvider } from "./context/ThemeContext";
import BlogEkleMain from "./pages/blog/blogEkle/BlogEkleMain";
import TopBar from "./layouts/Nav";
import Deneme from "./pages/deneme/Deneme";

function AppContent() {
  const location = useLocation();
  const hideNavFooter = location.pathname === "/deneme";

  return (
    <>
      {!hideNavFooter && <TopBar />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogcontent/:bloguuid" element={<BlogContent />} />
        <Route path="/category/:categoryName" element={<BlogContent />} />
        <Route path="/pdf" element={<PdfPages />} />
        <Route path="/blogekle/:blogerName" element={<BlogEkleMain />} />
        <Route path="/deneme" element={<Deneme />} />
      </Routes>
      {!hideNavFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
