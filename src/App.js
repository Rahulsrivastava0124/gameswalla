import "./App.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Home} from "./Components/Home";
import {Blog} from "./Components/Blog";
import Navbar from "./Components/Navbar";
import {Footer} from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
          <Routes>

              <Route path="/" element={<Home/>} />
              <Route path="/Blogs" element={<Blog/>} />
          </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
