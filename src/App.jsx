import "./App.css";
import { ProfileProvider } from "./ProfileProvider";
import { ProfileShow } from "./ProfileShow";
import { Infos } from "./Infos";

function App() {
  return (
    <>
      <ProfileProvider>
        <ProfileShow />
        <Infos />
      </ProfileProvider>
    </>
  );
}

export default App;
