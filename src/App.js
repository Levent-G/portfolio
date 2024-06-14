import {useState,useEffect} from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Nav from "./layouts/Nav";
import { DataContext } from "./context/DataContext"; 
import Blog from "./pages/Blog";
import Footer from './components/Footer'
import BlogContent from "./pages/BlogContent";
import PdfPages from "./pages/PdfPages";
import LoadingPage from "./layouts/LoadingPage";
function App() {
  const[loading,setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },1000);
  },[]);

  if(loading){
    return <LoadingPage/>;
  }

  return (
    <div className="App">
      <DataContext>
        <BrowserRouter>
     <Nav/>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/blogcontent/:blogBaslik" element={<BlogContent />} />
            <Route path="/pdf" element={<PdfPages />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </DataContext>
    </div>
  );
}

export default App;
