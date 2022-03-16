export const minimize = () => {
  let name = "terminal";
  let window = document.querySelector(`#${name}`).classList;
  window.toggle(`${name}`);
  window.toggle("hiden");
};
