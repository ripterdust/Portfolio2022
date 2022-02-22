export const handleClick = () => {
    let terminal = document.querySelector('#terminal').classList;
    terminal.remove('terminal');
    terminal.add('hiden')

    let taskTerminal = document.querySelector('#task-terminal').classList;
    taskTerminal.remove('icon')
    taskTerminal.add('hiden')

}