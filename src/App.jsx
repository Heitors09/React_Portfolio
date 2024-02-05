import "./App.css";
import { ProfileProvider } from "./ProfileProvider";
import { ProfileShow } from "./ProfileShow";
import { Infos } from "./Infos";
import { ProjectsShow } from "./ProjectsShow";

function App() {
  return (
    <>
      <ProfileProvider>
        <ProfileShow />
        <ProjectsShow />
      </ProfileProvider>
      <Infos />
    </>
  );
}

export default App;
