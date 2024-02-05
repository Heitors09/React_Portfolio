import { ProfileContext } from "./ProfileContext";
import { useDataGet } from "./useDataGet";

export function ProfileProvider({ children }) {
  const profile = useDataGet("https://api.github.com/users/Heitors09");
  const projects = useDataGet("https://api.github.com/users/Heitors09/repos");
  const recent = useDataGet(
    "https://api.github.com/users/Heitors09/repos?per_page=1&sort=created"
  );
  return (
    <ProfileContext.Provider value={{ profile, projects, recent }}>
      <div className="grid grid-cols-default grid gap-5">{children}</div>
    </ProfileContext.Provider>
  );
}
