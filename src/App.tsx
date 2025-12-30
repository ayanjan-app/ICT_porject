import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import "./App.css";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Sinup from "./components/Sinup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
                   <Route path="/si" element={<Sinup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
