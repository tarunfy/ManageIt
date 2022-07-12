import Navbar from "../components/Navbar";
import Hero from "../assets/images/Hero.svg";
import Arrow from "../assets/images/arrow.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="px-40 relative py-10 space-y-14 bg-primary-800 h-screen text-white">
      <Navbar />
      <div className="flex items-end justify-between z-20">
        <div className="space-y-6">
          <h1 className="text-[4rem]  leading-[5rem] font-Wotfard-SemiBold">
            The most versatile project management platform.
          </h1>
          <p className="text-xl text-slate-50 font-Wotfard-Thin max-w-xl">
            With comprehensive project management tools, ManageIt is perfect for
            all your project scheduling needs.
          </p>
          <Link
            to="/signup"
            className="px-6 py-4 inline-block text-lg font-Wotfard-Medium rounded-full bg-[#7C7DD6] shadow-xl focus:outline-none tracking-widest uppercase relative"
          >
            Get Started
            <img
              src={Arrow}
              alt="arrow"
              className="absolute bottom-8 -right-32 w-28 animate-pulse"
            />
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
