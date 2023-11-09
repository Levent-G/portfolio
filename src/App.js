import {BrowserRouter,Routes,Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Nav from "./layouts/Nav";
import { DataContext } from "./context/DataContext"; 
import Blog from "./pages/Blog";
import Footer from './components/Footer'
import BlogContent from "./pages/BlogContent";
function App() {
  return (
    <div className="App">
      <DataContext>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/blogcontent/:blogId" element={<BlogContent />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </DataContext>
    </div>
  );
}

export default App;
