import React from "react";
import { handleClick } from "../helpers/desktopHelper";
import { Files } from "./Desktop/Files";
import Pdf from "../assets/Curriculum.pdf";
export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="icons">
        <div
          className="icon"
          onClick={() => handleClick("terminal", "terminal")}
        >
          <i className="fa-solid fa-terminal terminal-icon"></i>
          Portfolio
          <br />
          [Terminal]
        </div>

        <a className="icon" href={Pdf} target="_blank" rel="noreferrer">
          <i className="fa-solid fa-file-pdf"></i>
          Files
        </a>
      </div>

      <Files />
    </div>
  );
};
