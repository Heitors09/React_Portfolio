import { ProfileContext } from "./Context/ProfileContext";
import { useDataGet } from "./Hooks/useDataGet";

export function DataProvider({ children }) {
  const profile = useDataGet("https://api.github.com/users/Heitors09");
  const projects = useDataGet("https://api.github.com/users/Heitors09/repos");
  const recent = useDataGet(
    "https://api.github.com/users/Heitors09/repos?per_page=1&sort=created"
  );
  return (
    <ProfileContext.Provider value={{ profile, projects, recent }}>
      {children}
    </ProfileContext.Provider>
  );
}
