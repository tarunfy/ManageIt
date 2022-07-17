import { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import nProgress from "nprogress";
//components
import Button3D from "../components/3DButton";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
//images
import logo from "../assets/images/favicon.png";
import github from "../assets/images/github.svg";
import google from "../assets/images/google.svg";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState(false);

  const {
    signUpWithEmail,
    signInWithAuthProvider,
    currentUser,
    isFetchingUser,
  } = useContext(AuthContext);

  const handleClick = () => setShow(!show);

  const handleSubmit = async (e) => {
    e.preventDefault();
    nProgress.start();

    if (password.length < 8) {
      toast.error("🫤 Password should be at least 8 characters long");
      nProgress.done();
      return;
    }
    if (password !== confirmPassword) {
      toast.error("😐 Passwords do not match");
      nProgress.done();
      return;
    }
    const userData = {
      email: email.trim(),
      password: password.trim(),
    };

    const res = await signUpWithEmail(userData);

    if (res.error) {
      toast.error(`😦 ${res.error.message}`);
      nProgress.done();
      return;
    }

    setEmail("");
    setPassword("");
    setConfirmPassword("");
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

  if (currentUser && !isFetchingUser) return <Navigate to="/dashboard" />;

  return (
    <>
      <div className="flex items-center justify-center h-screen space-x-20 w-full overflow-hidden bg-slate-100">
        <div className="flex flex-col items-center justify-center h-full z-30">
          <form className="px-10 py-6 bg-white shadow-custom  rounded-lg space-y-4 w-full">
            <div>
              <img src={logo} alt="logo" className="mx-auto my-0 h-20 w-20" />
              <h1 className="text-[2.5rem] text-primary-700 text-center font-Wotfard-Medium">
                Create your account
              </h1>
            </div>
            <div className="flex flex-col items-start space-y-1">
              <label htmlFor="email" className="font-Wotfard-Regular text-base">
                Email
              </label>
              <Input
                className="font-Wotfard-Medium"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                autoComplete="off"
                id="email"
              />
            </div>
            <div className="flex flex-col items-start space-y-1">
              <label
                htmlFor="password"
                className="font-Wotfard-Regular text-base"
              >
                Password
                <span className="text-xs font-Wotfard-Light block">
                  (at least 8 characters)
                </span>
              </label>
              <InputGroup size="md">
                <Input
                  id="password"
                  pr="4.5rem"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="font-Wotfard-Medium"
                  type={show ? "text" : "password"}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    className="font-Wotfard-Regular"
                    h="1.75rem"
                    size="sm"
                    onClick={handleClick}
                  >
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </div>
            <div className="flex flex-col items-start space-y-1">
              <label
                htmlFor="confirm_password"
                className="font-Wotfard-Regular text-base"
              >
                Confirm password
              </label>
              <Input
                id="confirm_password"
                pr="4.5rem"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="font-Wotfard-Medium"
                type={show ? "text" : "password"}
              />
            </div>

            <Button
              type="submit"
              disabled={!email || !password || !confirmPassword}
              className="font-Wotfard-Medium !bg-primary-600 hover:!bg-primary-500 text-white"
              onClick={handleSubmit}
            >
              Sign up
            </Button>

            <div className="w-full flex  items-center justify-center">
              <div className="h-[1px] w-2/4 bg-slate-400"></div>
              <p className="mx-4 text-lg">or</p>
              <div className="h-[1px] w-2/4 bg-slate-400"></div>
            </div>

            <div className="flex items-center space-x-2 justify-evenly">
              <Button3D
                name="GitHub"
                logo={github}
                handleSignin={handleGitHubSignIn}
              />
              <Button3D
                name="Google"
                logo={google}
                handleSignin={handleGoogleSignIn}
              />
            </div>

            <p className="text-base font-Wotfard-Regular text-center">
              Already have an account?
              <span>
                <Link to="/login" className="text-blue-500">
                  {" "}
                  Login
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

export default Signup;
