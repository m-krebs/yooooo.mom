export async function setJoke(element: HTMLElement) {
  await fetch("./jokes.json")
    .then((response) => response.json())
    .then((json) =>
      set(element, json["fat"][Math.floor(Math.random() * json["fat"].length)])
    );
}

function set(element: HTMLElement, joke: string) {
  element.innerHTML = joke;
}
