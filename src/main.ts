import "./style.css";
import {
  loadJokes,
  getJokeByCategory,
  setJoke,
  getRandomJoke,
} from "./joke.ts";
import refreshLogo from "./refresh.svg";

let jokeType: string = "random";

loadJokes();

export function doSomething() {
  console.log("Bruh")
}

doSomething();

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div><label for="category">Choose a category: </label>
  <select name="category" onchange="doSomething()">
  <option value="random">Random</option>
  <option value="fat">Fat</option>
  <option value="stupid">Stupid</option>
  </select></div>
  <div>
    <button id="refresh" class="bg-transparent border-none"><img class="invert w-5" src="${refreshLogo}" alt="refresh button"/></button>
  </div>
  <div id="joke" class="text-3xl">Loading Jokes...</div>
`;

// Initial joke
refreshJoke();
//setJoke(document.querySelector<HTMLElement>("#joke")!, getRandomJoke());

document.querySelector("#refresh")!.addEventListener("click", () => {
  refreshJoke();
  const refreshButton: HTMLElement = document.querySelector("#refresh")!;
  refreshButton.classList.add("animated");
  setTimeout(() => {
    refreshButton.classList.remove("animated");
  }, 300);
});

function refreshJoke() {
  setJoke(document.querySelector<HTMLElement>("#joke")!, getJokeFromCategory());
}

function getJokeFromCategory() {
  let joke: string;
  switch (jokeType) {
    case "fat":
      joke = getJokeByCategory("fat");
      break;
    case "stupid":
      joke = getJokeByCategory("stupid"); 
      break;
    default:
      joke = getRandomJoke();
      break;
  }
  return joke;
}
