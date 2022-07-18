import { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";
import { Center, Spinner } from "@chakra-ui/react";

export const ProjectContext = createContext(null);

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [isFetchingProjects, setIsFetchingProjects] = useState(false);

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    fetchProjects();
  }, []);

  const createProject = async (projectDetails) => {
    let error;

    try {
      await axios.post("http://localhost:8000/api/projects", {
        name: projectDetails.name,
        description: projectDetails.description,
        repoLink: projectDetails.repoLink,
        liveDemo: projectDetails.liveDemo,
        userId: currentUser.id,
      });

      fetchProjects();
    } catch (err) {
      error = err.message;
    }

    return {
      error: error ? error : null,
    };
  };

  const deleteProject = async (projectId) => {
    let error;
    try {
      await axios.delete(`http://localhost:8000/api/projects/${projectId}`);
      fetchProjects();
    } catch (err) {
      error = err.message;
    }
    return {
      error: error ? error : null,
    };
  };

  const updateProject = async (projectDetails) => {
    let error;
    try {
      await axios.patch(
        `http://localhost:8000/api/projects/${projectDetails.id}`,
        {
          name: projectDetails.name,
          description: projectDetails.description,
          repoLink: projectDetails.repoLink,
          liveDemo: projectDetails.liveDemo,
        }
      );
      fetchProjects();
    } catch (err) {
      error = err.message;
    }

    return {
      error: error ? error : null,
    };
  };

  const fetchProjects = async () => {
    setIsFetchingProjects(true);
    let error;
    try {
      const { data } = await axios.get(
        `http://localhost:8000/api/projects/${currentUser.id}`
      );
      setProjects([...data.projects]);
    } catch (err) {
      error = err.message;
    }

    setIsFetchingProjects(false);

    return {
      error: error ? error : null,
    };
  };

  if (isFetchingProjects)
    return (
      <Center h="100vh" w="100vw">
        <Spinner size="xl" />
      </Center>
    );

  return (
    <ProjectContext.Provider
      value={{
        createProject,
        deleteProject,
        updateProject,
        fetchProjects,
        projects,
        isFetchingProjects,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
