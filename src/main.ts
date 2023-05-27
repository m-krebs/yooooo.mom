import "./style.css";
import { setJoke } from "./joke.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    </div>
    <div id="joke" class="text-3xl"></div>
  </div>
`;

setJoke(document.querySelector<HTMLButtonElement>("#joke")!);