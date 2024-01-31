import { ProfileContext } from "./ProfileContext";
import { useProfileGet } from "./useProfileGet";

export function ProfileProvider({ children }) {
  const profile = useProfileGet();

  return (
    <ProfileContext.Provider value={profile}>
      {children}
    </ProfileContext.Provider>
  );
}
