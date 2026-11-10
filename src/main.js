import "./styles/style.scss";
import heroImg from "./assets/hero.png";
import javascriptLogo from "./assets/svg/javascript.svg";
import viteLogo from "./assets/svg/vite.svg";
import academyLogo from "./assets/htmlacademy.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
<section id="center">
  <div class="hero">
    <img class="base" src="${heroImg}" width="170" height="179" alt="">
    <img class="framework" src="${javascriptLogo}" alt="JavaScript logo">
    <img class="vite" src="${viteLogo}" alt="Vite logo">
  </div>
  <div>
    <h1>Hello Vite!</h1>
    <p>Edit <code>src/main.js</code> and save to test <code>HMR</code></p>
  </div>
  <div class='buttons'>
    <button id="counter" type="button" class="counter"></button>
    <button id="reset" type="button" class="counter">Reset</button>
  </div>
  <a href="https://htmlacademy.ru" target="_blank">
    <img src="${academyLogo}" width="100" height="100" alt="HTML Academy logo">
  </a>
</section>

<div class="ticks"></div>
<section id="next-steps"><div id="docs"></div><div id="social"></div></section>
<div class="ticks"></div>
<section id="spacer"></section>
`;

const counterBtn = setupCounter(document.querySelector("#counter"));
const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', () => {
  counterBtn.reset();
});

console.log(import.meta.env);



