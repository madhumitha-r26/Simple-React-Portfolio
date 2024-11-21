import React, { Component } from "react";
import "./css/Style.css";
import { GitHub } from "@mui/icons-material";
import { Link } from "@mui/icons-material";
import ECommerce from "./imgs/e-commerce.png"
import Blogging from "./imgs/blogging.png"
import FDA from "./imgs/fda.png"
import CDS from "./imgs/cds.png"
import HRS from "./imgs/hrs.png"
import FTD from "./imgs/ftd.png"

export class Projects extends Component {
  styles={
    fontSize:"50px",
    cursor:"pointer"
}
  render() { 
    return (
      <div className='dark:text-white'>
        <h1 className="text-4xl text-center m-8">Projects</h1>
        <div class="grid shadow-sm divide-y overflow-hidden sm:flex sm:divide-y-0 sm:divide-x gap-4 m-4">
  <div class="flex flex-col flex-[1_0_0%] border-none">
    <img class="w-full h-auto  sm:rounded-se-none" src={ECommerce} alt="Card Image"/>
    <div class="p-4 flex-1 md:p-5">
    <div className="flex justify-evenly">
                <GitHub style={this.styles}></GitHub>
                <Link style={this.styles}></Link>
              </div>
      <h3 class="text-lg font-bold text-white-800 pt-5">
      Modern E-commerce Platform
      </h3>
      <p class="mt-1 text-white-500">
      This project involved developing a dynamic and user-friendly e-commerce website designed to provide a seamless shopping experience.
      </p>
    </div>
  </div>

  <div class="flex flex-col flex-[1_0_0%] border-none">
    <img class="w-full h-auto" src={Blogging} alt="Card Image"/>
    <div class="p-4 flex-1 md:p-5">
    <div className="flex justify-evenly">
                <GitHub style={this.styles}></GitHub>
                <Link style={this.styles}></Link>
              </div>
      <h3 class="text-lg font-bold text-white-800 pt-5">
      Dynamic Blogging Platform
      </h3>
      <p class="mt-1 text-white-500">
      This project involved developing a robust and interactive blogging platform designed to provide users with a seamless content creation and sharing experience.
      </p>
    </div>
  </div>

  <div class="flex flex-col flex-[1_0_0%] border-none">
    <img class="w-full h-auto" src={FDA} alt="Card Image"/>
    <div class="p-4 flex-1 md:p-5">
    <div className="flex justify-evenly">
                <GitHub style={this.styles}></GitHub>
                <Link style={this.styles}></Link>
              </div>
      <h3 class="text-lg font-bold text-white-800 pt-5">
      Efficient Food Delivery Application
      </h3>
      <p class="mt-1 text-white-500">
      This project entailed developing a comprehensive food delivery system aimed at connecting restaurants with customers for a smooth and efficient delivery experience.
      </p>

    </div>
  </div>
</div>

<div class="grid shadow-sm divide-y overflow-hidden sm:flex sm:divide-y-0 sm:divide-x gap-4 m-4">
  <div class="flex flex-col flex-[1_0_0%] border-none">
    <img class="w-full h-auto" src={CDS} alt="Card Image"/>
    <div class="p-4 flex-1 md:p-5">
    <div className="flex justify-evenly">
                <GitHub style={this.styles}></GitHub>
                <Link style={this.styles}></Link>
              </div>
      <h3 class="text-lg font-bold text-white-800 pt-5">
      Cancer Detection System
      </h3>
      <p class="mt-1 text-white-500">
      This project focused on developing an advanced cancer detection system using deep learning techniques to improve early diagnosis and treatment planning.
      </p>
    </div>
  </div>

  <div class="flex flex-col flex-[1_0_0%] border-none">
    <img class="w-full h-auto" src={HRS} alt="Card Image"/>
    <div class="p-4 flex-1 md:p-5">
    <div className="flex justify-evenly">
                <GitHub style={this.styles}></GitHub>
                <Link style={this.styles}></Link>
              </div>
      <h3 class="text-lg font-bold text-white-800 pt-5">
      Handwritten Digit Recognition Using Machine Learning
      </h3>
      <p class="mt-1 text-white-500">
      This project aimed to develop an efficient handwriting digit recognition system utilizing machine learning techniques.
      </p>

    </div>
  </div>

  <div class="flex flex-col flex-[1_0_0%] border-none">
    <img class="w-full h-auto" src={FTD} alt="Card Image"/>
    <div class="p-4 flex-1 md:p-5">
    <div className="flex justify-evenly">
                <GitHub style={this.styles}></GitHub>
                <Link style={this.styles}></Link>
              </div>
      <h3 class="text-lg font-bold text-white-800 pt-5">
      Comprehensive Fitness Tracking Dashboard
      </h3>
      <p class="mt-1 text-white-500">
      This project involved developing an interactive fitness dashboard aimed at helping users track and manage their health and fitness goals effectively.
      </p>
     
    </div>
  </div>
</div>
      <footer>
        <p className="text-center text-xl"> © Designed by Reena Shalu - 2024</p>
      </footer>    
        </div>
    );
  }
}

export default Projects;
