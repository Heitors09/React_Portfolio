import { useState, useEffect } from "react";

export function useProjectsGet() {
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

    return () => {
      ignore = true;
    };
  }, []);

  return projects;
}
