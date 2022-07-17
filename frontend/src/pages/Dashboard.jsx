import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Card from "../components/Card";
import CreateModal from "../components/CreateModal";
import { Button } from "@chakra-ui/react";

const Dashboard = () => {
  const { signOut } = useContext(AuthContext);

  return (
    <div className="h-screen max-w-[1000px] mx-auto">
      <div className="mb-10  w-full py-10 flex items-center justify-between">
        <h1 className="font-Wotfard-Bold text-gray-900 text-6xl">
          All Projects
        </h1>
        <div className="space-x-4">
          <CreateModal />

          <Button
            onClick={signOut}
            className="font-Wotfard-Medium !text-gray-800"
          >
            Logout
          </Button>
        </div>
      </div>

      <div className="w-full grid grid-cols-3">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Dashboard;
