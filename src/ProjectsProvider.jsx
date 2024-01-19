import { useEffect, useState } from "react";
import { ProjectsContext } from "./ProjectsContext";

export function ProjectsProvider({ children }) {
  const [projects, setprojects] = useState([]);

  useEffect(() => {
    let ignore = false;

    async function ProjectsGet() {
      const data = await fetch("https://api.github.com/users/Heitors09/repos");
      const json = await data.json();

      if (!ignore) {
        setprojects(json);
      }
    }
    ProjectsGet();
    console.log(projects);

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <ProjectsContext.Provider value={projects}>
      {children}
    </ProjectsContext.Provider>
  );
}
