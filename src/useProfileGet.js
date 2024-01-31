import { useState, useEffect } from "react";
export function useProfileGet() {
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

  return profile;
}
