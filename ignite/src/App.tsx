import { Routes, Route } from "react-router-dom";
import NavHome from "./components/NavHome";
import NavLoggedIn from "./components/NavLoggedIn"; // you create this
import Home from "./pages/Home";
import FAQ from "./pages/Faq";
import About from "./pages/About";
import LoginModal from "./components/LoginModal";
import Dashboard from "./pages/Dashboard";
import { useAuth } from "./store/AuthContext";

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      {isLoggedIn ? <NavLoggedIn /> : <NavHome />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <LoginModal />
    </>
  );
}

export default App;
