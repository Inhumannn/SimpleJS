const numberValue = document.querySelector("#number").value;

const unitActions = {
  km: 1000,
  hm: 100,
  dam: 10,
  m: 1,
  dm: 0.1,
  cm: 0.01,
  mm: 0.001,
};

const fromValue = document.querySelector("#from");
fromValue.addEventListener("change", () => {
  if (unitActions === "km") {
    console.log(unitActions);
  }
});

const towardsValue = document.querySelector("#towards");
towardsValue.addEventListener("change", () => {
  console.log("ld");
});

const displayValue = document.querySelector("#display");

function convert() {}
