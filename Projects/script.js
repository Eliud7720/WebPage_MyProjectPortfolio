// MENU
const menuOpenButton = document.querySelector("#nav-open-button");
const menuCloseButton = document.querySelector("#nav-close-button");
const navLinks = document.querySelectorAll(".navbar-Menu .nav-link"); // todos los enlaces

// Abrir menú
menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

// Cerrar menú con el botón
menuCloseButton.addEventListener("click", () => {
  menuOpenButton.click();
});

// Cerrar menú al hacer clic en un enlace
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    // Asegurarse que el menú esté abierto antes de cerrar
    if(document.body.classList.contains("show-mobile-menu")){
      menuOpenButton.click();
    }
  });
});
