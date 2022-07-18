import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Card from "../components/Card";
import CreateModal from "../components/CreateModal";
import { Button } from "@chakra-ui/react";
import empty from "../assets/images/empty.svg";

const Dashboard = () => {
  const { signOut } = useContext(AuthContext);

  const [projects, setProjects] = useState([]);
  return (
    <div className="bg-[#fcfcfc]">
      <div className="h-screen max-w-[1000px] mx-auto bg-[#fcfcfc]">
        <div className="mb-10  w-full py-10 flex items-center justify-between">
          <h1 className="font-Wotfard-Bold text-gray-900 text-6xl">
            All Projects ({projects.length})
          </h1>
          <div className="space-x-4">
            <CreateModal />

            <Button
              size="md"
              onClick={signOut}
              className="font-Wotfard-Medium !text-gray-800"
            >
              Logout
            </Button>
          </div>
        </div>

        {projects.length > 0 ? (
          <div className="w-full grid grid-cols-3 gap-4">
            <Card />
            <Card />
            <Card />
          </div>
        ) : (
          <div className="flex items-center flex-col space-y-4">
            <img
              src={empty}
              alt="empty state"
              className="h-[400px] w-[400px]"
            />
            <p className="font-Wotfard-Regular text-xl text-center">
              No projects found, please add a new project.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
