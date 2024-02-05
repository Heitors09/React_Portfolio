import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

export function RecentPost() {
  const infoPost = useContext(ProfileContext);

  return infoPost.recent.map((r) => (
    <>
      <div
        className="flex h-20 w-[843px] bg-bgcolor drop-shadow-default rounded-lg justify-between items-center mt-3"
        key={r.id}
      >
        <h1 className="ml-7 font-merri text-boxTxColor font-bold text-xl">
          Recent Post
        </h1>
      </div>
      <div className="flex h-[201px] w-[843px] bg-bgcolor drop-shadow-default rounded-lg mt-3">
        <h1 className="ml-7 font-merri text-boxTxColor font-bold text-xl">
          {r.name}
        </h1>
        <footer></footer>
      </div>
    </>
  ));
}
