import { handleClick } from "../helpers/buttons";
import { minimize } from "../helpers/minimize";

export const Buttons = ({ classToHide }) => {
  return (
    <div className="top">
      <div className="buttons">
        <div
          className="button red"
          onClick={() => handleClick(classToHide)}
        ></div>
        <div className="button yellow" onClick={() => minimize()}></div>
        <div className="button green"></div>
      </div>
      <div className="name">$Bryan</div>
    </div>
  );
};
