import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/ignitelogo.png";
import Button from "./Button";
import { Menu, X, Home as HomeIcon, HelpCircle, Info } from "lucide-react";

const NavHome = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = (path: string) =>
    location.pathname === path
      ? "text-primary2 font-bold underline underline-offset-8 decoration-2"
      : "text-primary2 hover:text-primary2-light";

  // Wrapper for each nav item with icon + label, full clickable width
  const NavItem = ({
    to,
    Icon,
    label,
    variant = "default",
  }: {
    to: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    label: string;
    variant?: "default" | "drawer";
  }) => (
    <NavLink
      to={to}
      onClick={() => setMenuOpen(false)}
      className={({ isActive }) =>
        [
          "flex items-center gap-3 w-full px-4 py-2 rounded-md transition-colors cursor-pointer",
          isActive
            ? "text-primary2 font-bold underline underline-offset-8 decoration-2"
            : "text-primary2",
          variant === "drawer"
            ? "hover:bg-cyan-100"
            : "hover:text-primary2-light",
        ].join(" ")
      }
    >
      <Icon className="w-5 h-5" />
      <span className="flex-1">{label}</span>
    </NavLink>
  );

  return (
    <div className="mx-[clamp(1rem,4vw,2rem)]">
      <div className="flex shrink-0 shadow-xl justify-between items-center bg-white rounded-3xl p-[clamp(1rem,2vw,1.25rem)] my-[clamp(1rem,2vw,2rem)] max-w-4xl mx-auto">
        <a href="/">
          <img
            src={Logo}
            alt="Logo"
            className="h-[clamp(2.5rem,5vw,4rem)] w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden sm:flex items-center gap-[clamp(1rem,2vw,2rem)] text-[clamp(1.2rem,2vw,1.5rem)]">
          <NavLink to="/" className={linkClass("/")}>
            Home
          </NavLink>
          <NavLink to="/faq" className={linkClass("/faq")}>
            FAQ
          </NavLink>
          <NavLink to="/about" className={linkClass("/about")}>
            About
          </NavLink>
        </div>

        <div className="hidden sm:flex items-center">
          <Button variant="outline">Sign In</Button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="focus:outline-none cursor-pointer"
          >
            <Menu className="text-primary2 w-[clamp(1.5rem,5vw,2rem)] h-[clamp(1.5rem,5vw,2rem)]" />
          </button>
        </div>
      </div>

      {/* Drawer Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[clamp(12rem,50vw,16rem)] bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
    ${menuOpen ? "translate-x-0" : "translate-x-full"}
    overflow-y-auto
  `}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="focus:outline-none cursor-pointer"
          >
            <X className="text-primary2 w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col items-start gap-6 px-6 text-[clamp(1.2rem,3vw,1.5rem) ]">
          <NavItem variant="drawer" to="/" Icon={HomeIcon} label="Home" />
          <NavItem variant="drawer" to="/faq" Icon={HelpCircle} label="FAQ" />
          <NavItem variant="drawer" to="/about" Icon={Info} label="About" />

          <Button
            variant="outline"
            onClick={() => setMenuOpen(false)}
            className="mt-6 w-50% mx-auto"
          >
            Sign In
          </Button>
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed z-45 inset-0 bg-black opacity-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default NavHome;
