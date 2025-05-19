// Saving calc
calcArray = [];
let calc = 0;

const display = document.querySelector("#calc_resultat");
const boutons = document.querySelectorAll(".calc_btn");
boutons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const valeur = btn.value;
    if (valeur === "=") {
      const calcArrayJoin = calcArray.join("");
      try {
        const resultat = eval(calcArrayJoin);
        console.log(`Résultat : ${resultat}`);
        calcArray = [resultat.toString()];
        display.value = resultat;
      } catch (e) {
        console.log("Une erreur est survenues");
        calcArray = [];
      }
    } else if (valeur === "ce") {
      calcArray = [];
    } else if (valeur === "←") {
      calcArray.pop();
    } else {
      calcArray.push(valeur);
    }
    console.log(calcArray);
  });
});
