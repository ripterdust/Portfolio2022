import React from "react";
import { turnOff } from "../../helpers/turnOff";

export const StartMenu = () => {
  return (
    <div className="startMenu close" id="menu">
      <div className="Bg" onClick={() => turnOff()}>
        <i className="fa-solid fa-power-off"></i>
        Turn off
      </div>
    </div>
  );
};
