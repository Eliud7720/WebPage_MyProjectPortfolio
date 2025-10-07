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

document.addEventListener("DOMContentLoaded", () => {

// Animación del título de My Skills
const skillsTitle = document.querySelector(".my-skills .title");
const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      skillsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
skillsObserver.observe(skillsTitle);

// Animación del título de Projects
const projectsTitle = document.querySelector(".projects-section .section-title");
const projectsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      projectsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
projectsObserver.observe(projectsTitle);

// Animación del título de Resume
const resumeTitle = document.querySelector(".resume-section .section-title");
const resumeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      resumeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
resumeObserver.observe(resumeTitle);


  // Initialize Swipper projects
const swiper = new Swiper('.slider-wrapper', {
  spaceBetween: 25,

  // Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
   0: {
      slidesPerView: 1
   },
   768: {
      slidesPerView: 2
   },
   1024: {
      slidesPerView: 3
   }
   
  }
});


  // Initialize Swipper projects
const swiper2 = new Swiper('.slider-wrapper-resume', {
  spaceBetween: 25,

  // Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    slidesPerView: 1
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

});
