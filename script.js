const openBtn = document.querySelector(".open-btn");
const wallet = document.getElementById("envelope");
const letter = document.getElementById("letter");

openBtn.addEventListener("click", () => {
  // animar cartera
  wallet.classList.add("hide");

  // después de que se oculta
  setTimeout(() => {
    wallet.style.display = "none";
    letter.classList.remove("hidden");

    // forzar reflow para que la animación funcione
    void letter.offsetWidth;

    letter.classList.add("show");
  }, 400); // coincide con transición de wallet
});
