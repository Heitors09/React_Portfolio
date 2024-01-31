import { ProfileContext } from "./ProfileContext";
import { useDataGet } from "./useDataGet";

export function ProfileProvider({ children }) {
  const profile = useDataGet("https://api.github.com/users/Heitors09");
  console.log(profile);
  return (
    <ProfileContext.Provider value={profile}>
      {children}
    </ProfileContext.Provider>
  );
}
