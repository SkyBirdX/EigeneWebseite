import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projekte from "./pages/Projekte";
import Lebenslauf from "./pages/Lebenslauf";
import Kontakt from "./pages/Kontakt";
import AnimatedBackground from "./components/AnimatedBackground";
import './App.css'

function App() {
  return (
    <Router>
      <AnimatedBackground />
      <Navbar />
      <div className="max-w-5xl mx-auto mt-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projekte" element={<Projekte />} />
          <Route path="/lebenslauf" element={<Lebenslauf />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
