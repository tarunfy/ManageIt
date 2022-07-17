import Click from "../assets/sounds/click.mp3";

const sound = new Audio();

sound.src = Click;

const Button = ({ name, logo, handleSignin }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleSignin();
    sound.play();
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        className={`group border-none p-0 cursor-pointer rounded-lg ${
          name == "Google" ? "bg-slate-400" : "bg-slate-800"
        } ${
          name == "Google" ? "hover:bg-slate-500" : "hover:bg-slate-900"
        } transition-all duration-300 ease-in-out outline-offset-4`}
      >
        <span
          className={`flex items-center group-active:-translate-y-[2px] py-[12px] px-[40px] text-base ${
            name == "Google" ? "bg-stone-200" : "bg-slate-600"
          } ${
            name == "Google"
              ? "group-hover:bg-slate-100 text-slate-700/90"
              : "group-hover:bg-slate-700 text-white/90"
          }   transition-all duration-300 ease-in-out   hover:-translate-y-[8px] -translate-y-[5px] rounded-lg font-Wotfard-Regular`}
        >
          <img src={logo} alt={name} className="h-5 w-5 mr-2" /> {name}
        </span>
      </button>
    </div>
  );
};

export default Button;
