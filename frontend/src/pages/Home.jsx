import Github from "../assets/images/github.svg";

const Home = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <button className="group border-none p-0 cursor-pointer rounded-lg bg-slate-900">
        <span className="flex items-center group-active:-translate-y-[2px] py-[12px] px-[42px] text-xl bg-slate-700  text-white -translate-y-[6px] rounded-lg">
          <img src={Github} alt="" className="h-8 w-8 mr-2" /> Sign in with
          GitHub
        </span>
      </button>
    </div>
  );
};

export default Home;
