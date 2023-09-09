import {BrowserRouter,Routes,Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Nav from "./layouts/Nav";
import { DataContext } from "./context/DataContext"; 
function App() {
  return (
    <div className="App">
      <DataContext>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
          </Routes>
        </BrowserRouter>
      </DataContext>
    </div>
  );
}

export default App;
