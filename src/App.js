import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer.js";
import Home from "./Pages/Home.js";
import { Route, Routes } from "react-router-dom";
import Products from "./Pages/Products.js";
import About from "./Pages/About.js";
import "./index.css";
import "./page2.css";
import "./page3.css";


function App() {
  return (
    <div className="Container">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/products" element={<Products/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
