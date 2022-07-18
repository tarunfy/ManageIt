import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ProjectContext } from "../contexts/ProjectContext";
import Card from "../components/Card";
import CreateModal from "../components/CreateModal";
import { Button } from "@chakra-ui/react";
import EmptyState from "../components/EmptyState";

const Dashboard = () => {
  const { signOut } = useContext(AuthContext);

  const { projects, fetchProjects } = useContext(ProjectContext);

  return (
    <div className="bg-[#fcfcfc]">
      <div className="h-screen max-w-[1000px] mx-auto bg-[#fcfcfc]">
        <div className="mb-10  w-full py-10 flex items-center justify-between">
          <h1 className="font-Wotfard-Bold text-gray-800 text-6xl">
            All Projects ({projects?.length})
          </h1>
          <div className="space-x-4">
            <CreateModal />

            <Button
              size="md"
              onClick={signOut}
              className="font-Wotfard-Regular !text-gray-800"
            >
              Logout
            </Button>
          </div>
        </div>

        {projects?.length > 0 ? (
          <div className="w-full grid grid-cols-3 gap-4">
            {projects.map((project) => (
              <Card key={project._id} projectData={project} />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
