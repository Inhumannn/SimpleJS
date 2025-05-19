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
        console.log(`Result : ${resultat}`);
        calcArray = [resultat.toString()];
        display.value = resultat;
      } catch (e) {
        display.value = "An error has occurred";
        calcArray = [];
      }
    } else if (valeur === "ce") {
      calcArray = [];
    } else if (valeur === "←") {
      calcArray.pop();
    } else {
      calcArray.push(valeur);
      // Faire une boucle pour parcourir le tableau
      // Récupérer chaque élément et les ajouter à display.value
      let showTemp = "";
      showTemp += btn.value;
      //
      display.value = showTemp;
    }
    console.log(calcArray);
  });
});
