import React from "react";
import mock01 from "../assets/images/mock01.png";
import mock02 from "../assets/images/mock02.png";
import mock03 from "../assets/images/mock03.png";
import mock04 from "../assets/images/mock04.png";
import mock05 from "../assets/images/mock05.png";
import mock06 from "../assets/images/mock06.png";
import mock07 from "../assets/images/mock07.png";
import mock08 from "../assets/images/mock08.png";
import mock09 from "../assets/images/mock09.png";
import mock10 from "../assets/images/mock10.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a href="https://www.filmate.club/" target="_blank" rel="noreferrer">
            <img src={mock10} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="https://www.filmate.club/" target="_blank" rel="noreferrer">
            <h2>Whakr</h2>
          </a>
          <p>
            DStreamline task management for you or your team by whacking off
            tasks one by one.
          </p>
        </div>
        <div className="project">
          <a
            href="https://yujisatojr.itch.io/highspeedchase"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock09} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://yujisatojr.itch.io/highspeedchase"
            target="_blank"
            rel="noreferrer"
          >
            <h2>EventTracker</h2>
          </a>
          <p>
            Stay in (lip) sync with your top Spotify artists and never miss a
            beat when they hit the stage near you.
          </p>
        </div>
        <div className="project">
          <a
            href="https://yujisatojr.itch.io/spacecraft"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock08} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://yujisatojr.itch.io/spacecraft"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Taco-Everday</h2>
          </a>
          <p>
            Turn Taco Tuesday into Taco-Everyday with the ultimate flavor-filled
            chat room complete with new daily taco recipes.
          </p>
        </div>
        <div className="project">
          <a
            href="https://www.datumlearn.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock07} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://www.datumlearn.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Take a Hike</h2>
          </a>
          <p>
            Take your virtual hiking companion with you to explore Maui’s trails
            and have a hill of a lot of fun
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
