import React, { Fragment, useContext } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillGitlab } from "react-icons/ai";
import PageContext from "@/context/PageSwitcherContext";
import { useTranslations } from "next-intl";

function MainComponentBio() {
  const { setPage } = useContext(PageContext);
  const lang = useTranslations("MainComponentBio");

  const onPageChange = (e) => {
    setPage(e.currentTarget.id);
  };

  return (
    <Fragment>
      <div className="h-144 tel:hidden lg:w-4/12 bg-white lg:rounded-lg dark:bg-gray-700">
        <img
          src="images/DSC_5579_resized2.jpg"
          className="rounded-none lg:rounded-t-lg shadow-2xl hidden lg:block"
        />
        <div>
          <h1 className="text-3xl pt-8 lg:pt-0 mt-5 text-center fade-in-out dark:text-white">
            {lang("name")}
          </h1>
          <p className="text-1xl pt-8 lg:pt-0 my-3 text-center text-light-green font-medium">
            {lang("position")}
          </p>

          <div className="mt-7 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-center gap-7">
            <a
              className="link"
              href="https://github.com/BRicsi99"
              target="_blank"
            >
              <FaGithub
                size="2rem"
                className="h-6 fill-current text-gray-600 dark:text-white hover:text-green-700 dark:hover:text-green-700"
              />
            </a>
            <a
              className="link"
              href="https://gitlab.com/bardosrichard99"
              target="_blank"
            >
              <AiFillGitlab
                size="2rem"
                className="h-6 fill-current text-gray-600 dark:text-white hover:text-green-700 dark:hover:text-green-700"
              />
            </a>
            <a
              className="link"
              href="https://www.linkedin.com/in/richard-bardos/"
              target="_blank"
            >
              <FaLinkedin
                size="2rem"
                className="h-6 fill-current text-gray-600 dark:text-white hover:text-green-700 dark:hover:text-green-700"
              />
            </a>
          </div>

          <div className="mt-14 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-center gap-7">
            <button
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/files/RichardBardos_CV_en_202303.pdf";
              }}
              className="relative inline-flex p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-700 rounded-md group-hover:bg-opacity-0">
                {lang("cv")}
              </span>
            </button>
            <button
              id="Contact.jsx"
              onClick={onPageChange}
              className="relative inline-flex p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-700 rounded-md group-hover:bg-opacity-0">
              {lang("contact")}
              </span>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default MainComponentBio;

// Language file search
export async function getStaticProps(context) {
  return {
    props: {
      messages: (await import(`../lang/${context.locale}.json`)).default,
    },
  };
}
