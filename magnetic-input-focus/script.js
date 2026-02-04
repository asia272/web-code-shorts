const input = document.getElementById("input");
const aura = document.querySelector(".aura");
const label = document.getElementById("label");

label.innerHTML = [...label.innerText]
  .map(l => `<span>${l}</span>`)
  .join("");

const letters = label.querySelectorAll("span");

input.addEventListener("focus", () => {
  aura.style.opacity = 1;
  letters.forEach((l, i) => {
    l.style.transform = "translateY(-6px)";
    l.style.color = "#00f2ff";
    l.style.transitionDelay = `${i * 40}ms`;
  });
});

input.addEventListener("blur", () => {
  aura.style.opacity = 0;
  letters.forEach(l => {
    l.style.transform = "translateY(0)";
    l.style.color = "#aaa";
    l.style.transitionDelay = "0ms";
  });
});

input.addEventListener("mousemove", e => {
  const rect = input.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  aura.style.background = `radial-gradient(circle at ${x}px ${y}px,
    rgba(0, 242, 255, 0.45),
    transparent 60%)`;
});
