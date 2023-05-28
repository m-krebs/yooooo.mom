import "./style.css";
import {
  loadJokes,
  getJokeByCategory,
  setJoke,
  getRandomJoke,
} from "./joke.ts";
import refreshLogo from "./refresh.svg";

loadJokes();

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <button id="refresh" class="bg-transparent border-none"><img class="invert w-5" src="${refreshLogo}" alt="refresh button"/></button>
  </div>
  <div id="joke" class="text-3xl"></div>
`;

setJoke(document.querySelector<HTMLElement>("#joke")!, getRandomJoke());

document.querySelector("#refresh")!.addEventListener("click", () => {
  refreshJoke();
  const refreshButton: HTMLElement = document.querySelector("#refresh")!;
  refreshButton.classList.add("animated");
  setTimeout(() => {
    refreshButton.classList.remove("animated");
  }, 300);
});

function refreshJoke() {
  setJoke(
    document.querySelector<HTMLElement>("#joke")!,
    getJokeByCategory("stupid")
  );
}
