import "./App.css";
import { ProfileProvider } from "./ProfileProvider";
import { ProfileShow } from "./ProfileShow";
import { ProjectsProvider } from "./ProjectsProvider";
import { ProjectsShow } from "./ProjectsShow";

function App() {
  return (
    <>
      <ProfileProvider>
        <ProfileShow />
      </ProfileProvider>
      <ProjectsProvider>
        <ProjectsShow />
      </ProjectsProvider>
    </>
  );
}

export default App;
