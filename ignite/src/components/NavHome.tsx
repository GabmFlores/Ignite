import Logo from "../assets/ignitelogo.png";

const NavHome = () => {
  return (
    <div className="flex justify-between bg-white rounded-3xl p-4 m-8">
      <a href="/">
        <img src={Logo} alt="Logo" className="h-16" />
      </a>
      <div className="flex items-center gap-2 justify-evenly">
        <div>Home</div>
        <div>FAQ</div>
        <div>ABOUT</div>
        <div>Register</div>
        <div>Sign In</div>
      </div>
    </div>
  );
};

export default NavHome;
