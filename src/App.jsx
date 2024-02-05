import "./App.css";
import { ProfileProvider } from "./ProfileProvider";
import { ProfileShow } from "./ProfileShow";
import { ProjectsShow } from "./ProjectsShow";
import { Infos } from "./Infos";

function App() {
  return (
    <>
      <ProfileProvider>
        <div>
          <ProfileShow />
          <Infos />
        </div>
        <ProjectsShow />
      </ProfileProvider>
    </>
  );
}

export default App;
