import React, { Component } from "react";
import "./css/Style.css";
import { Send } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import { Facebook } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";
import { WhatsApp } from "@mui/icons-material";
import { Mail } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";

export class Contact extends Component {
  styles={
    fontSize:"30px",
    cursor:"pointer"
}
  render() {
    return (
      <div className="dark:text-white">
        <h1 className="text-4xl text-center pt-8">Feel free to contact</h1>
        <form action="mailto:reenashalu@gmail.com" className="flex flex-wrap items-center justify-center m-5">
          <input
            type="text"
            class="py-3 px-4 block w-full mt-5 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            placeholder="Enter Name"
          />
          <input
            type="text"
            class="py-3 px-4 block w-full mt-5 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            placeholder="Enter Email"
          />
          <input
            type="text"
            class="py-3 px-4 block w-full mt-5 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            placeholder="Enter Phone"
          />
          <textarea
            class="py-3 px-4 block w-full h-60 mt-5 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            placeholder="Enter Message"
          />
</form>


<div className="flex justify-between mx-5 flex-wrap-reverse md">
<div>
<h6 className="italic mt-2">Connect with me</h6>
      <WhatsApp style={this.styles}></WhatsApp> &nbsp;
      <Instagram style={this.styles}></Instagram> &nbsp;
      <Facebook style={this.styles}></Facebook> &nbsp;
      <LinkedIn style={this.styles}></LinkedIn> &nbsp;
      <Twitter style={this.styles}></Twitter> &nbsp;
      <Mail style={this.styles}></Mail> &nbsp;
      <GitHub style={this.styles}></GitHub> &nbsp;
</div>

<div>
    <button type="submit" className="btn my-5 w-full h-auto text-white bg-dark border-2 border-white hover:border-white active:border-white "> <Send/> Send</button>
</div>
</div>  

        <footer>
          <p className="text-center text-xl">
            © Designed by Reena Shalu - 2024
          </p>
        </footer>
      </div>
    );
  }
}

export default Contact;
