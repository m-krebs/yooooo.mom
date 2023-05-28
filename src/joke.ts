export async function loadJokes() {
  await fetch("./jokes.json")
    .then((response) => response.json())
    .then((json) => {
      const jokesString = JSON.stringify(json);
      localStorage.setItem("cachedJokes", jokesString);
    });
}

function getCachedJokes() {
  const cachedJokesString = localStorage.getItem("cachedJokes");
  if (cachedJokesString === null) {
    return null;
  }
  return JSON.parse(cachedJokesString);
}

export function getRandomJoke() {
  const jokes = getCachedJokes();
  let allJokes: any = [];
  Object.keys(jokes).forEach((val) => {
    jokes[val].forEach((joke: string) => {
      allJokes.push(joke);
    });
  }, []);
  return allJokes[Math.floor(Math.random() * allJokes.length)];
}

export function getJokeByCategory(category: string) {
  const jokes = getCachedJokes();
  return jokes[category][Math.floor(Math.random() * jokes[category].length)];
}

export function setJoke(element: HTMLElement, joke: string) {
  element.innerHTML = joke;
}
