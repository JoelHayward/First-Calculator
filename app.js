let lightMode = true;

function switchMode() {
  if (lightMode) {
    document.getElementById("text").innerHTML = "Switch to Light Mode";
    document.getElementById("text").style.color = "white";
    document.body.style.background = "black";
    lightMode = false;
  } else {
    document.getElementById("text").innerHTML = "Switch to Dark Mode";
    document.getElementById("text").style.color = "black";
    document.body.style.background = "white";
    lightMode = true;
  }
}
