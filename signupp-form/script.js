const card = document.getElementById("card");
const toSignUp = document.getElementById("toSignUp");
const toSignIn = document.getElementById("toSignIn");

toSignUp.addEventListener("click", () => {
  card.classList.add("active");
});

toSignIn.addEventListener("click", () => {
  card.classList.remove("active");
});
