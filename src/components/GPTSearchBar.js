import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import languageConfig from "../utils/languageConfig";

const GPTSearchBar = () => {

  const  language= useSelector(store => store.config.language)

  return (
    <div className="pt-[15%] flex justify-center">
      <form className=" grid grid-cols-12 w-1/2 p-2 shadow-md">
        <input
          className="col-span-8 focus:outline-none focus:ring focus:ring-slate-50  p-2"
          type="text"
          placeholder={languageConfig[language].search}
        />
        <button className="col-span-4 bg-red-700 mx-2  p-2">
          <p className="text-white"><FontAwesomeIcon icon={faSearch} className="" /> {languageConfig[language].searchButton}</p>
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
