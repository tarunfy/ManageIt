import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="w-full">
        <nav className="flex items-center justify-between">
          <h1 className="text-4xl text-[#A3D8D7] font-Wotfard-Bold tracking-widest">
            ManageIt
          </h1>
          <Link to="/login">
            <a className="font-Wotfard-Regular text-xl">Login</a>
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
