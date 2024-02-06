import "./App.css";
import { DataProvider } from "./components/DataProvider";
import { ProfileShow } from "./components/ProfileShow";
import { ProjectsShow } from "./components/ProjectsShow";

function App() {
  return (
    <DataProvider>
      <div className="flex gap-5 font-Merriweather">
        <ProfileShow />
        <ProjectsShow />
      </div>
    </DataProvider>
  );
}

export default App;
