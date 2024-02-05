import { RecentProjects } from "./RecentProjects";

export function ProjectsShow() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex min-w-[830px] h-20 bg-bgcolor drop-shadow-default rounded-lg justify-between items-center">
          <h1 className="ml-7 font-merri text-boxTxColor font-bold text-xl">
            My Projects
          </h1>
          <a className="mr-7 font-merri text-boxTxColor ">Veja Todos</a>
        </div>
        <RecentProjects />
      </div>
    </>
  );
}
