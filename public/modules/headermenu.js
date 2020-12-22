const about = document.getElementById("about");
const skills = document.getElementById("skills");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");

about.addEventListener("click", descepouco);

function descepouco() {
  window.scrollTo(0, 800);
}

skills.addEventListener("click", descemedio), 800;

function descemedio() {
  window.scrollTo(0, 1400);

}

projects.addEventListener("click", descemuito);

function descemuito() {
  window.scrollTo(0, 2000);
}

contact.addEventListener("click", desce);

function desce() {
  window.scrollTo(0, document.body.scrollHeight);
}
