let lightMode = true;
let formula = "";

function switchMode() {
  if (lightMode) {
    document.getElementById("text").innerHTML = "Switch to Light Mode";
    document.getElementById("text").style.color = "white";
    document.getElementById("display").style.color = "white";
    document.body.style.background = "black";
    lightMode = false;
  } else {
    document.getElementById("text").innerHTML = "Switch to Dark Mode";
    document.getElementById("text").style.color = "black";
    document.getElementById("display").style.color = "black";
    document.body.style.background = "white";
    lightMode = true;
  }
}

function addToFormula(itemToAdd) {
  formula = formula + itemToAdd;
  document.getElementById("display").innerHTML = formula;
}

function calculateResult() {
  document.getElementById("display").innerHTML =
    formula + " = " + eval(formula);
}

function clearDisplay() {
  formula = "";
  document.getElementById("display").innerHTML = formula;
}
