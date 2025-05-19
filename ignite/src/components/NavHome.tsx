import { NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/ignitelogo.png";
import Button from "./Button";

const NavHome = () => {
  const location = useLocation();

  const linkClass = (path: string) =>
    location.pathname === path
      ? "text-primary2 font-bold underline underline-offset-8 decoration-2 hover:text-primary2-light"
      : "text-primary2 hover:text-primary2-light";

  return (
    <div className="mx-8">
      <div className="flex shadow-xl justify-between bg-white rounded-3xl p-4 my-8 max-w-4xl mx-auto">
        <a href="/">
          <img src={Logo} alt="Logo" className="h-[clamp(3rem,5vw,4rem)]" />
        </a>
        <div className="flex items-center gap-8 justify-evenly text-[clamp(1.2rem,2vw,1.5rem)] mx-2">
          <NavLink to="/" className={linkClass("/")}>
            Home
          </NavLink>
          <NavLink to="/faq" className={linkClass("/faq")}>
            FAQ
          </NavLink>
          <NavLink to="/about" className={linkClass("/about")}>
            ABOUT
          </NavLink>
        </div>
        <div className="flex items-center gap-4 justify-evenly text-[clamp(1.2rem,2vw,1.5rem)] mx-2">
          <Button variant="outline">Sign In</Button>
        </div>
      </div>
    </div>
  );
};

export default NavHome;
