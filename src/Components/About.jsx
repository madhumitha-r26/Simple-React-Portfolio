import React, { Component } from 'react'
import './css/Style.css'
import Avatar from './imgs/avatar.jpg'

export class About extends Component {
  render() {
    return (
<div className='dark:text-white'>
<h1 className="text-4xl text-center pt-8">About Me</h1>
<div className='pt-8 flex items-center justify-center'>
<div class="max-w-md mx-auto overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full md:h-full md:w-48" src={Avatar} alt="Profile pic"/>
    </div>
    <div class="p-8">
      <p className='text-lg text-justify'>
      Aspiring and dedicated software engineer with a solid foundation in computer science and hands-on experience in 
      developing and troubleshooting software applications. Eager to leverage my academic knowledge and programming skills 
      to contribute to innovative projects and enhance productivity. Highly motivated to continuously improve and excel within 
      a dynamic team environment, and to grow professionally by tackling real-world challenges.
      </p>
    </div>
  </div>
</div>
</div>
<h1 className="text-4xl text-center py-8">Skills</h1>
<div class="container mx-auto">
<div class="grid grid-cols-6 gap-2 mb-3 md:max-xl:flex">
  <div><img src='https://img.icons8.com/?size=100&id=20909&format=png&color=000000'/></div>
  <div><img src='https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000'/></div>
  <div><img src='https://img.icons8.com/?size=100&id=108784&format=png&color=000000'/></div>
  <div><img src='https://img.icons8.com/?size=100&id=13441&format=png&color=000000'/></div>
  <div><img src='https://img.icons8.com/?size=100&id=9nLaR5KFGjN0&format=png&color=000000'/></div>
  <div><img src='https://img.icons8.com/?size=100&id=54087&format=png&color=000000'/></div>
  <div><img src='https://img.icons8.com/?size=100&id=74402&format=png&color=000000'/></div>
  <div><img src='https://img.icons8.com/?size=100&id=123603&format=png&color=000000'/></div>
  <div><img src='https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000'/></div>
  <div><img src='https://img.icons8.com/?size=100&id=g9mmSxx3SwAI&format=png&color=000000'/></div>
  <div><img src='https://img.icons8.com/?size=100&id=ew8X3wM9rXiK&format=png&color=000000'/></div>
  <div><img src='https://img.icons8.com/?size=100&id=13679&format=png&color=000000'/></div>
 
</div>
</div>

<footer className='mt-8'>
        <p className="text-center text-xl"> © Designed by Reena Shalu - 2024</p>
      </footer>
</div>
    )
  }
}

export default About