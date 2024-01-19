import { useEffect } from "react";
import { useState } from "react";
import { ProfileContext } from "./ProfileContext";

export function ProfileProvider({ children }) {
  const [profile, setprofile] = useState({});

  useEffect(() => {
    let ignore = false;

    async function ProfileGet() {
      const data = await fetch("https://api.github.com/users/Heitors09");
      const json = await data.json();

      if (!ignore) {
        setprofile(json);
      }
    }

    ProfileGet();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <ProfileContext.Provider value={profile}>
      {children}
    </ProfileContext.Provider>
  );
}
