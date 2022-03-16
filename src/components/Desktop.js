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

        <a
          className="icon curriculum"
          href={Pdf}
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-solid fa-file-pdf"></i>
          Curriculum
        </a>
      </div>

      <Files />
    </div>
  );
};
