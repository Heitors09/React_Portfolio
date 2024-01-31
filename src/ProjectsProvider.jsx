import { ProjectsContext } from "./ProjectsContext";
import { useDataGet } from "./useDataGet";

export function ProjectsProvider({ children }) {
  const projects = useDataGet("https://api.github.com/users/Heitors09/repos");
  console.log(projects);
  return (
    <ProjectsContext.Provider value={projects}>
      {children}
    </ProjectsContext.Provider>
  );
}
