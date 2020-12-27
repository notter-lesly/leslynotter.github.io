const about = document.getElementById("about");
const skills = document.getElementById("skills");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");

about.addEventListener("click", () => {
  scrollDown(".about");
});
skills.addEventListener("click", () => {
  scrollDown(".skills");
});
projects.addEventListener("click", () => {
  scrollDown(".project");
});
contact.addEventListener("click", () => {
  scrollDown(".contact");
});

function scrollDown(className) {
  let el = document.querySelector(className);
  el.scrollIntoView(true);
}