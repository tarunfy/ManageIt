import notFound from "../assets/images/404.png";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen space-x-10 bg-slate-100 w-full">
      <img src={notFound} alt="" className="h-[500px] w-[500px]" />
      <div>
        <h1 className="text-6xl font-Wotfard-Bold max-w-xs">
          Oops! Page Not Found.
        </h1>
        <p className="font-Wotfard-Regular text-2xl max-w-lg my-5">
          You must have picked the wrong door because I haven't been able to lay
          my eye on the page you've been searching for.
        </p>
        <Link to="/">
          <Button
            className="font-Wotfard-Medium uppercase !rounded-full !text-xl !bg-primary-500 !text-white"
            size="lg"
          >
            Back to home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
