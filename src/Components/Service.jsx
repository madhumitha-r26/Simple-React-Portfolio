import React, { Component } from 'react'
import './css/Style.css'
import dataanalyst from './imgs/Analyst.png'
import designer from './imgs/Designer.png'
import developer from './imgs/Developer.png'
export class Service extends Component {
  render() {
    return (
      <div className='dark:text-white'>
      <h1 className="text-4xl text-center pt-8">Services</h1>
      <div class="grid mx-3 space-x-4 shadow-sm divide-y overflow-hidden sm:flex sm:divide-y-0 sm:divide-x">
  <div class="flex flex-col flex-[1_0_0%] border-none">
    <img class="w-full h-auto sm:rounded-se-none" src={designer} alt="Card Image"/>
    <div class="p-4 flex-1 md:p-5">
      <h3 class="text-lg font-bold text-white-800">
        Designer
      </h3>
      <p class="mt-1 text-text-white text-justify">
      I am a passionate Graphical and UI/UX Designer, dedicated to crafting visually stunning and user-centric digital experiences. With a keen eye for detail and a deep understanding of user behavior, I strive to create designs that are both beautiful and highly functional. My goal is to enhance user satisfaction and engagement through intuitive and aesthetically pleasing interfaces.      </p>
    </div>
  </div>

  <div class="flex flex-col flex-[1_0_0%] border-none">
    <img class="w-full h-auto sm:rounded-se-none" src={dataanalyst} alt="Card Image"/>
    <div class="p-4 flex-1 md:p-5">
      <h3 class="text-lg font-bold text-white-800">
        Data Analyst
      </h3>
      <p class="mt-1 text-text-white text-justify">
      As a data analyst, I thrive on transforming raw data into actionable insights that drive business decisions. With expertise in statistical analysis and data visualization, I uncover trends and patterns to inform strategy and optimize performance. My analytical skills and attention to detail ensure accurate and impactful data interpretations.      </p>
    </div>
  </div>

  <div class="flex flex-col flex-[1_0_0%] border-none">
    <img class="w-full h-auto sm:rounded-se-none" src={developer} alt="Card Image"/>
    <div class="p-4 flex-1 md:p-5">
      <h3 class="text-lg font-bold text-white-800">
        Web Developer
      </h3>
      <p class="mt-1 text-text-white text-justify">
      I am a skilled web developer with a passion for creating responsive and dynamic websites. With expertise in modern web technologies, I build efficient and user-friendly interfaces. My goal is to enhance user experiences by crafting innovative and functional web solutions.
      </p>
    </div>
  </div>
</div>

<footer>
        <p className="text-center text-xl"> © Designed by Reena Shalu - 2024</p>
      </footer>
</div>
   
    )
  }
}

export default Service