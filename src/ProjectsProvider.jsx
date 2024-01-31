import { ProjectsContext } from "./ProjectsContext";
import { useProjectsGet } from "./useProjectsGet";

export function ProjectsProvider({ children }) {
  const projects = useProjectsGet();

  return (
    <ProjectsContext.Provider value={projects}>
      {children}
    </ProjectsContext.Provider>
  );
}
