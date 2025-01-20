import Logo from "./Logo";
import Profile from "./Profile";

const Navbar = () => {
  return (
    <div className="CContainer drop-shadow-lg flex justify-between items-center py-5">
      {/* Navbar Left */}
      <Logo />
      {/* Navbar right */}
      <Profile />
    </div>
  );
};

export default Navbar;
