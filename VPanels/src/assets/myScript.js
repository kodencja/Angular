var panels = document.querySelectorAll(".panel");
function toggleOpen() {
  this.classList.toggle("open");
  if (this.classList.contains("open")) {
    var audio1 = document.querySelector("#sound1").play();
  } else {
    var audio2 = document.querySelector("#sound2").play();
  }
}

function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));
