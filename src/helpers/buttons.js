export const handleClick = (hide) => {
    console.log(hide)
    let terminal = document.querySelector(`#${hide}`).classList;
    terminal.remove(hide);
    terminal.add('hiden')

    let taskTerminal = document.querySelector(`#task-${hide}`).classList;
    taskTerminal.remove('icon')
    taskTerminal.add('hiden')

}