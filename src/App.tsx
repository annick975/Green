import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// ... existing code ...
// Import layout components (to be created)
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// Import pages (to be created)
import Home from "./pages/Home";
import About from "./pages/About";
import Initiatives from "./pages/Initiatives";
import Impact from "./pages/Impact";
import Team from "./pages/Team";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans bg-white text-gray-900">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/initiatives" element={<Initiatives />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
