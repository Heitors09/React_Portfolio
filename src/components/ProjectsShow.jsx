import { RecentProjects } from "./RecentProjects";
import { Search } from "lucide-react";
import { useState } from "react";

export function ProjectsShow() {
  const [search, setSearch] = useState("");

  function handleChange(event) {
    const query = event.target.value;

    setSearch(query);
  }

  return (
    <>
      <div className="flex flex-col w-[843px] ">
        <div className="flex w-[843px] h-20 bg-bgcolor drop-shadow-default rounded-lg justify-between items-center ">
          <textarea
            placeholder="Pesquise..."
            className="bg-transparent resize-none outline-none w-[700px]  ml-5 mt-[30px]  text-green-500 "
            onChange={handleChange}
          />
          <Search className="mr-5 size-6 text-boxTxColor hover:text-green-500 cursor-pointer" />
        </div>
        <RecentProjects search={search} />
      </div>
    </>
  );
}
