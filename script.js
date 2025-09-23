const menuOpenButton = document.querySelector("#nav-open-button");
const menuCloseButton = document.querySelector("#nav-close-button");

menuOpenButton.addEventListener("click", () => {
    
    // Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu")
}
);

   // close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => 
    
   menuOpenButton.click()
);
