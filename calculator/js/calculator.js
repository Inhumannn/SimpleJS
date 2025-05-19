// Saving calc
calcArray = [];
let calc = 0;

const boutons = document.querySelectorAll(".calc_btn");
boutons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const valeur = btn.value;
    if (valeur === "ce") {
      calcArray = [];
    } else if (valeur === "←") {
      calcArray.pop();
    } else {
      calcArray.push(valeur);
    }
    console.log(calcArray);
  });
});

function calc_resultat(formName, event) {
  console.log(calcArray);
}
