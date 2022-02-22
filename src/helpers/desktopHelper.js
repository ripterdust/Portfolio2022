export const handleClick = (id, elemClass) => {
    const element = document.querySelector(`#${id}`).classList;
    const task = document.querySelector(`#task-${elemClass}`).classList;
    console.log(task)
    task.remove('hiden')
    task.add('icon')
    element.remove('hiden');
    element.add(elemClass);

  }