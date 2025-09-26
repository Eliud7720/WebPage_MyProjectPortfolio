// MENU
const menuOpenButton = document.querySelector("#nav-open-button");
const menuCloseButton = document.querySelector("#nav-close-button");

menuOpenButton.addEventListener("click", () => {
    // Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});

// close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => {
    menuOpenButton.click();
});


// ANIMACIÓN DE TÍTULO
document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector(".my-skills .title");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(title);
});
