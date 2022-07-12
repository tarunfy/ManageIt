import Navbar from "../components/Navbar";
import Hero from "../assets/images/Hero.svg";
import Arrow from "../assets/images/arrow.svg";

const Home = () => {
  return (
    <div className="px-40 py-10 space-y-28 bg-primary-800 h-screen text-white">
      <Navbar />
      <div className="flex items-end justify-between">
        <div className="space-y-6">
          <h1 className="text-[4rem]  leading-[5rem] font-Wotfard-SemiBold">
            The most versatile project management platform.
          </h1>
          <p className="text-xl text-slate-50 font-Wotfard-Thin max-w-xl">
            With comprehensive project management tools, ManageIt is perfect for
            all your project scheduling needs.
          </p>
          <button className="px-6 py-4 text-lg font-Wotfard-Regular rounded-full bg-[#7C7DD6] tracking-widest uppercase relative">
            Manage Now
            <img
              src={Arrow}
              alt="arrow"
              className="absolute bottom-8 -right-32 w-28 animate-pulse"
            />
          </button>
        </div>
        <img src={Hero} alt="Hero" className="h-[28rem] w-[28rem]" />
      </div>
    </div>
  );
};

export default Home;
