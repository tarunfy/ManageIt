import Github from "../assets/images/github.svg";

const Home = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <button className="group border-none p-0 cursor-pointer rounded-lg bg-slate-800 hover:bg-slate-900 transition-all duration-300 ease-in-out outline-offset-4">
        <span className="flex items-center group-active:-translate-y-[2px] py-[12px] px-[42px] text-2xl bg-slate-600 transition-all duration-300 ease-in-out  text-white/90 group-hover:text-white group-hover:bg-slate-700 hover:-translate-y-[8px] -translate-y-[5px] rounded-lg">
          <img src={Github} alt="" className="h-8 w-8 mr-2" /> Sign in with
          GitHub
        </span>
      </button>
    </div>
  );
};

export default Home;
