export function setupArticle(element: HTMLButtonElement) {
  let counter = 0;
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `article`;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}
