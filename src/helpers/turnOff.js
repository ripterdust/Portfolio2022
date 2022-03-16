export const turnOff = () => {
  let turn = document.querySelector(".turnOff").classList;
  turn.remove("hiden");

  setTimeout(() => {
    window.location.replace("http://www.google.com");
  }, 2000);
};
