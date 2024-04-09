import "./App.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Home} from "./Components/Home";
import {Blog} from "./Components/Blog";
import Navbar from "./Components/Navbar";
import {Footer} from "./Components/Footer";
import {Feedback} from "./Components/Feedback";
import {ContactPages} from "./Components/ContactPages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/Blogs" element={<Blog/>} />
              <Route path={"/Feedback"} element={<Feedback/>}/>
              <Route path={"/ContactUs"} element={<ContactPages/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
