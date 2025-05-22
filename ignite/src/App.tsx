import { Routes, Route } from "react-router-dom";
import NavHome from "./components/NavHome";
import Home from "./pages/Home";
import FAQ from "./pages/Faq";
import About from "./pages/About";
import LoginModal from "./components/LoginModal";

function App() {
  return (
    <>
      <NavHome />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <LoginModal />
    </>
  );
}

export default App;
