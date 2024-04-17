import "./App.css";
import {HashRouter,Routes,Route} from 'react-router-dom'
import {Home} from "./Components/Home";
import {Blog} from "./Components/Blog";
import Navbar from "./Components/Navbar";
import {Footer} from "./Components/Footer";
import {Feedback} from "./Components/Feedback";
import {ContactPages} from "./Components/ContactPages";
import {ExchmarketNet} from "./Components/OnlineSites/Exchmarket.net";


function App() {
  return (
    <div className="App">
      <HashRouter>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/Blogs" element={<Blog/>} />
              <Route path={"/Feedback"} element={<Feedback/>}/>
              <Route path={"/ContactUs"} element={<ContactPages/>}/>
              <Route path={"/Exchmarket.net"} element={<ExchmarketNet/>}/>
          </Routes>
          <Footer/>
      </HashRouter>
    </div>
  );
}

export default App;
