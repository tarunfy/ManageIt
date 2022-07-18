import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <>
      <header className="w-full z-20">
        <nav className="flex items-center justify-between">
          <h1 className="text-6xl text-primary-400 font-Wotfard-Bold">
            ManageIt
          </h1>
          <Link to="/login" className="font-Wotfard-Regular text-xl">
            <Button className="font-Wotfard-Medium !bg-gray-100 !text-gray-800">
              Login
            </Button>
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
