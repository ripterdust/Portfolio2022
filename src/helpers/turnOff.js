export const turnOff = () => {
  let turn = document.querySelector(".turnOff").classList;
  turn.remove("hiden");

  setTimeout(() => {
    window.location.reload();
  }, 2000);
};
