import { useContext } from "react";
import { ProfileContext } from "./Context/ProfileContext";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

export function RecentProjects(search) {
  const infoProjects = useContext(ProfileContext);
  const projects = infoProjects.projects;
  //search está vindo como objeto em que se acessa search.search, a formatação da função estava errada
  //eu estava usando {} sem o return, pra retirar o return preciso tirar as chaves da função
  const filteredProjects =
    search.search !== ""
      ? projects.filter((project) =>
          project.name
            .toLocaleLowerCase()
            .includes(search.search.toLocaleLowerCase())
        )
      : projects;

  return (
    <div className="flex flex-wrap gap-5 mt-4">
      {filteredProjects.map((project) => (
        <Dialog.Root key={project.id}>
          <Dialog.Trigger
            className="bg-bgcolor drop-shadow-default rounded-lg w-[411px] h-48 grid-span-2 hover:ring-2 
          hover:ring-green-500 hover:cursor-pointer text-left focus-visible:ring-2 focus-visible:ring-green-500 outline-none "
          >
            <h1 className="flex  font-bold gap-2 mt-4 ml-4 text-boxTxColor text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-folder"
              >
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              {project.name}
            </h1>
            <p className="text-boxTxColor ml-4">{project.description}</p>
            <footer className="flex ml-[260px] gap-6 text-boxTxColor mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-star"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              {project.stargazers_count}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-git-branch"
              >
                <line x1="6" y1="3" x2="6" y2="15"></line>
                <circle cx="18" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M18 9a9 9 0 0 1-9 9"></path>
              </svg>
              {project.stargazers_count}
            </footer>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="inset-0 fixed bg-black/50" />
            <Dialog.Content className="  fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] min-h-[30vh] w-full bg-bgcolor rounded-md flex flex-col outline-none">
              <Dialog.Close className="absolute right-2 top-2.5 bg-transparent p-1.5 text-slate-400 hover:text-slate-100">
                <X className="size-5" />
              </Dialog.Close>
              <h1 className="flex text-4xl font-bold gap-2 mt-4 ml-4 text-boxTxColor text-center">
                {project.name}
              </h1>
              <p className="gap-2 mt-4 ml-4 font-medium text-boxTxColor">
                {project.description}
              </p>
              <footer className="ml-[500px] mt-4 font-Merriweather text-boxTxColor font-medium flex items-center gap-1">
                {project.language}
              </footer>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      ))}
    </div>
  );
}
