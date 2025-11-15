import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Design from "./pages/Design";
import Develop from "./pages/Develop";
import Market from "./pages/Market";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const noFooterPaths = ["/", "/signup"];
  const location = useLocation(); 

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/design" element={<Design />} />
          <Route path="/develop" element={<Develop />} />
          <Route path="/market" element={<Market />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

    
      {!noFooterPaths.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;
