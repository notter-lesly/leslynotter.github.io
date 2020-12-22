slide = document.getElementById("slide");

bolinha1 = document.getElementById("bolinha1");
bolinha1.addEventListener("click", ativa1);

function ativa1() {
  slide.classList.remove("f2", "f3", "f4");
  slide.classList.add("f1");
}

bolinha2 = document.getElementById("bolinha2");
bolinha2.addEventListener("click", ativa2);

function ativa2() {
  slide.classList.remove("f1", "f3", "f4");
  slide.classList.add("f2");
}

bolinha3 = document.getElementById("bolinha3");
bolinha3.addEventListener("click", ativa3);

function ativa3() {
  slide.classList.remove("f1", "f2", "f4");

  slide.classList.add("f3");
}

bolinha4 = document.getElementById("bolinha4");
bolinha4.addEventListener("click", ativa4);
function ativa4() {
  slide.classList.remove("f1", "f2", "f3");

  slide.classList.add("f4");
}
