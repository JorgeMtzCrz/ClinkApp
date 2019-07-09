const fiesta = document.getElementById("fiesta");
const coctel = document.getElementById("coctel");
const acomp = document.getElementById("acomp");
const fiestaForm = document.getElementById("fiesta-form");
const coctelForm = document.getElementById("coctel-form");
const acompForm = document.getElementById("acomp-form");

fiesta.addEventListener("click", event => {
  hideElements();
  fiestaForm.style.display = "block";
});

coctel.addEventListener("click", event => {
  hideElements();
  coctelForm.style.display = "block";
});

acomp.addEventListener("click", event => {
  hideElements();
  acompForm.style.display = "block";
});

function hideElements() {
  fiesta.style.display = "none";
  coctel.style.display = "none";
  acomp.style.display = "none";
}
