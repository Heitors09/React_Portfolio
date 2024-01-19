import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

export function ProfileShow() {
  const infoProfile = useContext(ProfileContext);

  return (
    <div>
      <img src={infoProfile.avatar_url} alt="" />
      <h2>{infoProfile.name}</h2>
      <footer>{infoProfile.bio}</footer>
    </div>
  );
}
