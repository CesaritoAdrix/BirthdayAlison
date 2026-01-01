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

const backBtn = document.querySelector(".back-btn");

backBtn.addEventListener("click", () => {
  // salida de la carta
  letter.classList.remove("show");
  letter.classList.add("hide");

  setTimeout(() => {
    letter.classList.add("hidden");
    letter.classList.remove("hide");

    // mostrar cartera
    wallet.style.display = "flex";
    wallet.classList.remove("hide");

    // forzar reflow
    void wallet.offsetWidth;

    wallet.classList.add("show");
  }, 400);
});
