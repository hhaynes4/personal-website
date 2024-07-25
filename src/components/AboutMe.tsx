import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const media = [];

export default function AboutMe() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>About Me</h1>
        <div className="">
          <div className="skill">
            <h4>
              I am a full stack developer from Maui, Hawaii. Beyond coding, I love to hike around my island home - Maui, HI - and find new waterfalls to climb. I included some pictures from my favorite hikes below. ADD MORE
            </h4>
          </div>
        </div>
        
      </div>
    </div>
  );
}

