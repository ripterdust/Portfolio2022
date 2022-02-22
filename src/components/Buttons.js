export const Buttons = () => {

    const handleClick = () => {
        let terminal = document.querySelector('#terminal')
        terminal.remove('terminal')

    }

    return <div className="top">
        <div className="buttons">
            <div className="button red" onClick={ handleClick }></div>
            <div className="button yellow"></div>
            <div className="button green"></div>
        </div>
        <div className="name">$Bryan</div>
    </div>
}