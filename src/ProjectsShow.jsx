import { useContext } from "react";
import { ProjectsContext } from "./ProjectsContext";

export function ProjectsShow() {
  const infoProjects = useContext(ProjectsContext);

  return infoProjects.map((p) => {
    return (
      <div key={p.id}>
        <p>{p.name}</p>
        <footer>{p.description}</footer>
      </div>
    );
  });
}
