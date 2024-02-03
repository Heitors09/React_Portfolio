import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

export function ProfileShow() {
  const infoProfile = useContext(ProfileContext);

  return (
    <div className="bg-bgcolor drop-shadow-default rounded-md w-80 h-72 flex items-center flex-col justify-center m-default">
      <img
        src={infoProfile.avatar_url}
        alt=""
        className="w-32 rounded-full border-2 border-green-500 border-solid"
      />
      <h2 className="text-boxTxColor font-bold mt-[20px] text-2xl font-merri">
        {infoProfile.name}
      </h2>
      <footer className=" text-sm text-center text-boxTxColor font-medium mt-2 font-merri">
        {infoProfile.bio}
      </footer>
    </div>
  );
}
