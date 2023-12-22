document.addEventListener('DOMContentLoaded', () => {
    const burgerIcon = document.getElementById('burger');
    const navBarMenu = document.getElementById("nav-links");

    burgerIcon.addEventListener('click', () => {
        navBarMenu.classList.toggle("hidden");
        burgerIcon.classList.toggle("hidden");
    });
});
