// Saving calc
calcArray = [];

const display = document.querySelector("#calc_resultat");
display.value = 0;
const boutons = document.querySelectorAll(".calc_btn");
boutons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const valeur = btn.value;
    if (valeur === "=") {
      const calcArrayJoin = calcArray.join("");
      try {
        // Fasst function
        const resultat = Function(`"use strict"; return (${calcArrayJoin})`)();
        display.value = resultat;
        calcArray = [resultat.toString()];
      } catch (e) {
        display.value = "An error has occurred";
        calcArray = [];
      }
    } else if (valeur === "ce") {
      display.value = calcArray.join("");
      calcArray = [];
    } else if (valeur === "←") {
      display.value = calcArray.join("");
      calcArray.pop();
    } else {
      calcArray.push(valeur);
      display.value = calcArray.join("");
    }
    console.log(calcArray);
  });
});
