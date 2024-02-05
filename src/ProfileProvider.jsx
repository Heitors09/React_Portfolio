import { ProfileContext } from "./ProfileContext";
import { useDataGet } from "./useDataGet";

export function ProfileProvider({ children }) {
  const profile = useDataGet("https://api.github.com/users/Heitors09");
  const projects = useDataGet("https://api.github.com/users/Heitors09/repos");
  console.log(profile);
  console.log(projects);
  return (
    <ProfileContext.Provider value={{ profile, projects }}>
      <div className="grid grid-cols-default grid gap-5">{children}</div>
    </ProfileContext.Provider>
  );
}
