const headerText = document.querySelector(".headerText");
const titleContainer = document.querySelector(".titleContainer");
const particles = document.querySelectorAll(".particle");
headerText.classList.add("animateIn");

headerText.onanimationend = () => {
  titleContainer.classList.add("animateIn");
  particles.forEach((particle) => {
    particle.classList.add("animateParticle");
  });
};
