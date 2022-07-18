import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { useContext } from "react";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <header className="w-full z-20">
        <nav className="flex items-center justify-between">
          <h1 className="text-6xl text-primary-400 font-Wotfard-Bold">
            ManageIt
          </h1>
          <Link
            to={currentUser ? "/dashboard" : "/login"}
            className="font-Wotfard-Regular text-xl"
          >
            <Button className="font-Wotfard-Medium !bg-gray-100 !text-gray-800">
              {currentUser ? "Dashboard" : "Login"}
            </Button>
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
