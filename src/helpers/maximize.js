export const maximize = () => {
  let name = "terminal";
  let window = document.querySelector(`#${name}`).classList;
  window.remove("hiden");
  window.add(`${name}`);
};
