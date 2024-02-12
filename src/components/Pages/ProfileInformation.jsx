import { useDataGet } from "../Hooks/useDataGet";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function ProfileInformation() {
  const infoProfile = useDataGet("https://api.github.com/users/Heitors09");
  const infoRecent = useDataGet(
    "https://api.github.com/users/Heitors09/repos?per_page=2&sort=updated"
  );

  return (
    <div className="bg-bgcolor drop-shadow-default rounded-md w-[900px] h-[800px] p-5 ml-[210px] flex flex-col   gap-5 ">
      <div className="flex items-center gap-3 font-Merriweather text-boxTxColor gap-5">
        <img
          src={infoProfile.avatar_url}
          alt=""
          className="w-32 rounded-full border-2 border-green-500 border-solid"
        />
        <p>{infoProfile.bio}</p>
      </div>
      <h1 className="font-Merriweather font-bold  text-boxTxColor text-lg ml-5 mt-5">
        Recent updated projects:
      </h1>
      <div className="flex gap-3">
        {infoRecent.map((recent) => (
          <div
            className="bg-bgcolor drop-shadow-default rounded-lg w-[411px] h-48 grid-span-2 hover:ring-2 
        hover:ring-green-500 hover:cursor-pointer text-left flex flex-col"
            key={recent.id}
          >
            <h2 className="font-bold font-Merriweather gap-2 mt-4 ml-4 text-lg text-boxTxColor">
              {recent.name}
            </h2>
            <p className="font-Merriweather ml-4 text-sm w-[300px] text-boxTxColor font-medium ">
              {recent.description}
            </p>
            <div className="flex gap-12 ml-4 mt-7 font-Merriweather text-boxTxColor">
              <p>
                Update:{" "}
                {formatDistanceToNow(recent.updated_at, {
                  locale: ptBR,
                  addSuffix: true,
                })}
              </p>
              <p>
                Criado:{" "}
                {formatDistanceToNow(recent.created_at, {
                  locale: ptBR,
                  addSuffix: true,
                })}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="font-Merriweather text-boxTxColor text-start">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facilis
        eius, quidem ad quas ducimus. At exercitationem voluptates nostrum
        voluptatibus iste iure facilis sit porro, et ab temporibus, vitae eius!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
        recusandae velit dolore odio, ducimus voluptatibus accusantium
        perferendis voluptatem quae enim tempora et hic animi non. Nostrum
        laboriosam voluptatibus fuga necessitatibus!
      </p>
    </div>
  );
}
