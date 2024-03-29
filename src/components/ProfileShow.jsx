import { useContext } from "react";
import { ProfileContext } from "./Context/ProfileContext";
import { Link } from "react-router-dom";

export function ProfileShow() {
  const infoProfile = useContext(ProfileContext);

  return (
    <div>
      <Link to="/profile-information">
        <div className="bg-bgcolor drop-shadow-default rounded-md w-80 h-72 flex items-center flex-col justify-center mb-[40px]  hover:duration-200 hover:h-80 group">
          <img
            src={infoProfile.profile.avatar_url}
            alt=""
            className="w-32 rounded-full border-2 border-green-500 border-solid"
          />
          <h2 className="text-boxTxColor font-bold mt-[20px] text-2xl ">
            {infoProfile.profile.name}
          </h2>
          <footer className=" text-sm text-center text-boxTxColor p-2 font-medium mt-2 ">
            {infoProfile.profile.bio}
          </footer>
          <div className="text-sm text-transparent group-hover:text-green-500 group-hover:duration-200">
            Saiba mais
          </div>
        </div>
      </Link>
      <div className="bg-bgcolor drop-shadow-default rounded-md w-80 h-72 flex  flex-col mb-[40px] grid-span-1">
        <ul className="flex flex-col ml-11 mt-8 gap-7 font-merri text-boxTxColor font-semibold text-base">
          <li className="flex gap-4">
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
              className="feather feather-map-pin"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            Brasil, Fortaleza
          </li>
          <li className="flex gap-4 ">
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
              className="feather feather-github"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            <a href="#">Github</a>
          </li>
          <li className="flex gap-4 items-center">
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
              className="feather feather-linkedin"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <a href="#">Linkedin</a>
          </li>
          <li className="flex gap-4 items-center">
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
              className="feather feather-twitter"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
            <a href="#">Twitter</a>
          </li>
          <li className="flex gap-4 items-center">
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
              className="feather feather-mail"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <a href="#">Gmail</a>
          </li>
        </ul>
      </div>
      <div className="bg-bgcolor drop-shadow-default rounded-md w-80 h-72 flex  flex-col">
        <ul className="flex flex-wrap ml-5 mt-8 gap-4 font-merri text-white font-semibold text-xs">
          <li className="bg-gray-900 hover:bg-green-500 cursor-pointer w-20 h-7 rounded-full flex items-center justify-center">
            HTML
          </li>
          <li className="bg-gray-900  hover:bg-green-500 cursor-pointer w-20 h-7 rounded-full flex items-center justify-center">
            CSS
          </li>
          <li className="bg-gray-900   hover:bg-green-500 cursor-pointer w-20 h-7 rounded-full flex items-center justify-center ">
            JAVASCRIPT
          </li>
          <li className="bg-gray-900   hover:bg-green-500 cursor-pointer w-20 h-7 rounded-full flex items-center justify-center">
            REACT
          </li>
          <li className="bg-gray-900   hover:bg-green-500 cursor-pointer w-20 h-7 rounded-full flex items-center justify-center">
            TAILWIND
          </li>
          <li className="bg-gray-900   hover:bg-green-500 cursor-pointer w-20 h-7 rounded-full flex items-center justify-center">
            GIT
          </li>
          <li className="bg-gray-900   hover:bg-green-500 cursor-pointer w-20 h-7 rounded-full flex items-center justify-center">
            GITHUB
          </li>
        </ul>
      </div>
    </div>
  );
}
