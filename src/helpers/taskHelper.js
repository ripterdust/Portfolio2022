export const startMenu = ( ) => {
    const menu = document.querySelector('#menu').classList;
    console.log(menu)
    menu.toggle('close');
    menu.toggle('open')

}