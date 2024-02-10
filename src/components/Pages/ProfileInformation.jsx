import { useDataGet } from "../Hooks/useDataGet";

export function ProfileInformation() {
  const infoProfile = useDataGet("https://api.github.com/users/Heitors09");

  return (
    <div className="bg-bgcolor drop-shadow-default rounded-md w-[800px] h-[500px] p-5 ml-[210px]">
      <div className="flex items-center gap-3 font-Merriweather text-boxTxColor">
        <img
          src={infoProfile.avatar_url}
          alt=""
          className="w-32 rounded-full border-2 border-green-500 border-solid"
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam ab
          unde adipisci! Repellat voluptatem corrupti veritatis itaque sint
          optio iusto, minus eos repudiandae suscipit earum voluptas architecto,
          velit odit soluta.
        </p>
      </div>
      <div className="bg-green-500 drop-shadow-default rounded-md w-[400px] h-12 mt-5 ml-5"></div>
      <div className="bg-green-500 drop-shadow-default rounded-md w-[400px] h-12 mt-5 ml-5"></div>
      <div className="bg-green-500 drop-shadow-default rounded-md w-[400px] h-12 mt-5 ml-5"></div>
      <div className="bg-green-500 drop-shadow-default rounded-md w-[400px] h-12 mt-5 ml-5"></div>
    </div>
  );
}
