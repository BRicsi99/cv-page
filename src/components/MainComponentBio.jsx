import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillGitlab } from "react-icons/ai";

function MainComponentBio() {
  return (
    <>
      <div className="h-144 w-full lg:w-2/5 bg-white lg:rounded-lg">
        <img
          src="images/DSC_5579_resized2.jpg"
          className="rounded-none lg:rounded-t-lg shadow-2xl hidden lg:block"
        />
        <div>
          <h1 className="text-3xl pt-8 lg:pt-0 mt-5 text-center">
            Bárdos Richárd
          </h1>
          <p className="text-1xl pt-8 lg:pt-0 my-3 text-center text-light-green font-medium">
            Frontend Fejlesztő
          </p>

          <div className="mt-5 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-center gap-7">
            <a className="link" href="https://github.com/BRicsi99">
              <FaGithub
                size="2rem"
                className="h-6 fill-current text-gray-600 hover:text-green-700"
              />
            </a>
            <a className="link" href="https://gitlab.com/bardosrichard99">
              <AiFillGitlab
                size="2rem"
                className="h-6 fill-current text-gray-600 hover:text-green-700"
              />
            </a>
            <a
              className="link"
              href="https://www.linkedin.com/in/richard-bardos/"
            >
              <FaLinkedin
                size="2rem"
                className="h-6 fill-current text-gray-600 hover:text-green-700"
              />
            </a>
          </div>

          <div className="mt-5 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-center gap-7">
            <button className="relative inline-flex p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                CV Letöltése
              </span>
            </button>
            <button className="relative inline-flex p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Kapcsolat
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 h-12 w-18 p-4">
        <button className="js-change-theme focus:outline-none">🌙</button>
      </div>
    </>
  );
}

export default MainComponentBio;
