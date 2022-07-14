import { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import nProgress from "nprogress";
//components
import Button from "../components/3DButton";
//images
import Girl from "../assets/images/girl.png";
import logo from "../assets/images/favicon.png";
import github from "../assets/images/github.svg";
import google from "../assets/images/google.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signInWithEmail, signInWithAuthProvider } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    nProgress.start();
    const userData = {
      email: email.trim(),
      password: password.trim(),
    };

    const res = await signInWithEmail(userData);

    if (res.error) {
      toast.error(`😦 ${res.error.message}`);
      nProgress.done();
      return;
    }
    setEmail("");
    setPassword("");
    nProgress.done();
  };

  const handleGitHubSignIn = async () => {
    nProgress.start();
    const res = await signInWithAuthProvider("github");

    if (res.error) {
      toast.error(`😦 ${res.error.message}`);
      nProgress.done();
      return;
    }
    nProgress.done();
  };

  const handleGoogleSignIn = async () => {
    nProgress.start();
    const res = await signInWithAuthProvider("google");

    if (res.error) {
      toast.error(`😦 ${res.error.message}`);
      nProgress.done();
      return;
    }
    nProgress.done();
  };

  return (
    <>
      <div className="flex h-screen space-x-20 w-full overflow-hidden bg-slate-100">
        <div className="w-2/4 z-20" id="shape">
          <img
            src={Girl}
            alt="shape"
            className="h-[180vh] w-full -ml-20 object-cover z-20"
          />
        </div>

        <div className="flex flex-col items-center justify-center h-full z-30">
          <form className="px-10 py-6 bg-white shadow-custom  rounded-lg space-y-4 w-full">
            <div>
              <img src={logo} alt="logo" className="mx-auto my-0 h-20 w-20" />
              <h1 className="text-[2.5rem] text-primary-700 text-center font-Wotfard-Medium">
                Login to your account
              </h1>
            </div>
            <div className="flex flex-col items-start space-y-1">
              <label htmlFor="email" className="font-Wotfard-Medium text-base">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                autoComplete="off"
                id="email"
                className="bg-slate-100 border-[1px] border-slate-200 text-base font-Wotfard-Regular p-2 w-full focus:outline-none rounded-md"
              />
            </div>
            <div className="flex flex-col items-start space-y-1">
              <label
                htmlFor="password"
                className="font-Wotfard-Medium text-base"
              >
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                className="bg-slate-100  text-base  p-2 w-full  rounded-md border-[1px] border-slate-200 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={!email || !password}
              onClick={handleSubmit}
              className="px-4 py-2 disabled:bg-primary-400 disabled:text-white/50 disabled:cursor-not-allowed bg-primary-500 text-white font-Wotfard-Medium text-base rounded-md outline-offset-4 hover:shadow-primary-300 disabled:shadow-none hover:shadow-md transition-shadow"
            >
              Log in
            </button>

            <div className="w-full flex  items-center justify-center">
              <div className="h-[1px] w-2/4 bg-slate-400"></div>
              <p className="mx-4 text-lg">or</p>
              <div className="h-[1px] w-2/4 bg-slate-400"></div>
            </div>

            <div className="flex items-center space-x-2 justify-evenly">
              <Button
                name="GitHub"
                logo={github}
                handleSignin={handleGitHubSignIn}
              />
              <Button
                name="Google"
                logo={google}
                handleSignin={handleGoogleSignIn}
              />
            </div>

            <p className="text-base font-Wotfard-Regular text-center">
              Don't have an account?
              <span>
                <Link to="/signup" className="text-blue-500">
                  {" "}
                  Sign up
                </Link>
              </span>
            </p>
          </form>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Login;
