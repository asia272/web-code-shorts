const btn = document.querySelector(".hold-btn");

let timer;

btn.addEventListener("mousedown", () => {
  btn.classList.add("charging");

  timer = setTimeout(() => {
    btn.classList.add("success");
  }, 1200);
});

btn.addEventListener("mouseup", reset);
btn.addEventListener("mouseleave", reset);

function reset() {
  clearTimeout(timer);

  if (!btn.classList.contains("success")) {
    btn.classList.remove("charging");
  }
}
