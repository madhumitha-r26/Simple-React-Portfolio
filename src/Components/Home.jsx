import React from "react";
import "./css/Style.css";
import HeaderPic from "./imgs/header_pic.jpg";
import Resume from "./document/RESUME.pdf"

export const Home = () => {

  return (
    <div className="dark:text-white">
      <div>
        <h5 className="text-center text-5xl pt-5 font-mono">REENA SHALU</h5>
        <h6 className="text-center text-3xl font-mono">Software Engineer</h6>
      </div>
      <div className="flex items-center justify-center">
        <a href={Resume} download="ReenaShalu-Resume">
        <button type="button" 
        className="btn my-3 mb-0 w-auto h-auto text-white bg-dark border-2 border-white hover:border-white active:border-white"
        > DOWNLOAD CV </button>
        </a>
        </div>
      <div
        className="bg-no-repeat bg-center hp"
        style={{ backgroundImage: `url(${HeaderPic})` }}
      ></div>

      <footer>
        <p className="text-center text-xl"> © Designed by Reena Shalu - 2024</p>
      </footer>
    </div>
  );
};
