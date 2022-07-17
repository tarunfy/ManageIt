import Navbar from "../components/Navbar";
import Hero from "../assets/images/Hero.svg";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const Home = () => {
  return (
    <div className="px-40 relative py-10 space-y-14 bg-primary-800 h-screen text-white">
      <Navbar />
      <div className="flex items-end justify-between z-20">
        <div className="space-y-6 flex flex-col items-start justify-between">
          <h1 className="text-[4rem]  leading-[5rem] font-Wotfard-SemiBold">
            The most versatile project management platform.
          </h1>
          <p className="text-xl text-slate-50 font-Wotfard-Thin max-w-xl">
            With comprehensive project management tools, ManageIt is perfect for
            all your project scheduling needs.
          </p>
          <Link to="/signup">
            <Button
              className="font-Wotfard-Medium !text-2xl !bg-primary-500 !text-white"
              size="lg"
            >
              Get Started
            </Button>
          </Link>
        </div>
        <img src={Hero} alt="Hero" className="h-[32rem] w-[32rem]" />
      </div>
      <div id="blurry-gradient"></div>
      <div id="blurry-gradient-2"></div>
    </div>
  );
};

export default Home;
