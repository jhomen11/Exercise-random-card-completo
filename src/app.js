/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  cardGenerate();

  setInterval(() => {
    cardGenerate();
  }, 5000);
};

const cardGenerate = () => {
  let numRamdon = Math.floor(Math.random() * (12 - 1 + 1) + 1);

  let numPica = Math.floor(Math.random() * 4);
  let picaRamdon = ["♦", "♥", "♠", "♣"];
  let pica = picaRamdon[numPica];

  let Caja1 = document.querySelector(".caja1");
  Caja1.innerHTML = pica;
  let Caja3 = document.querySelector(".caja3");
  Caja3.innerHTML = pica;
  let Caja2 = document.querySelector(".caja2");
  Caja2.innerHTML = numRamdon;

  if (pica == "♦" || pica == "♥") {
    Caja1.style.color = "red";
    Caja3.style.color = "red";
    Caja2.style.color = "red";
  } else {
    Caja1.style.color = "black";
    Caja3.style.color = "black";
    Caja2.style.color = "black";
  }
};

let boton = document.getElementById("btn");
boton.addEventListener("click", cardGenerate);
