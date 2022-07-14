import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Dashboard = () => {
  const { signOut, currentUser } = useContext(AuthContext);
  console.log(currentUser);

  return (
    <div className="h-screen flex justify-center items-center">
      <button className="px-4 py-2 text-white bg-orange-500" onClick={signOut}>
        Signout
      </button>
    </div>
  );
};

export default Dashboard;
