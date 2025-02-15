import { Form, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import {Home, About, Contact,Projects} from "./index";
import Loader from "./components/Loader";
import SideBar from "./components/SideBar";
function App(){
  return (
    <>
      <main className="fixed top-0   bg-transparent  p-4 z-50"> 
        <Router>
          <Navbar/>
          <SideBar/>
          <Routes>
          <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </Router>
      </main>
      <div>
        <Loader />
      </div>
    </>
  )
}

export default App
