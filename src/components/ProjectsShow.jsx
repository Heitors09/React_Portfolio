import { RecentProjects } from "./RecentProjects";
import { Search } from "lucide-react";

export function ProjectsShow() {
  return (
    <>
      <div className="flex flex-col w-[843px] ">
        <div className="flex w-[843px] h-20 bg-bgcolor drop-shadow-default rounded-lg justify-between items-center ">
          <textarea
            placeholder="Pesquise..."
            className="bg-transparent resize-none outline-none w-[700px] h-20 ml-5 mt-4  text-green-500 "
          />
          <Search className="mr-5 size-6 text-boxTxColor hover:text-green-500 cursor-pointer" />
        </div>
        <RecentProjects />
      </div>
    </>
  );
}
