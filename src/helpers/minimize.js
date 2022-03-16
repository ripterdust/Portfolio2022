export const minimize = () => {
  let name = "terminal";
  let window = document.querySelector(`#${name}`).classList;
  window.remove(`${name}`);
  window.add("hiden");
};
