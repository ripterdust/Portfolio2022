import { handleClick } from "../helpers/buttons"

export const Buttons = () => {

    return <div className="top">
        <div className="buttons">
            <div className="button red" onClick={ handleClick }></div>
            <div className="button yellow"></div>
            <div className="button green"></div>
        </div>
        <div className="name">$Bryan</div>
    </div>
}