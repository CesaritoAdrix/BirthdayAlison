const openBtn = document.querySelector(".open-btn");
const container = document.querySelector(".container");
const wallet = document.getElementById("envelope");
const letter = document.getElementById("letter");

openBtn.addEventListener("click", () => {
  container.classList.add("open");

  setTimeout(() => {
    wallet.style.display = "none";
    letter.classList.remove("hidden");
  }, 400);
});
