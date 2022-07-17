import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProjectContext = createContext(null);

export const ProjectProvider = ({ children }) => {
  return (
    <ProjectContext.Provider value={{}}>{children}</ProjectContext.Provider>
  );
};
