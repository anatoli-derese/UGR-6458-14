const hamburger = document.getElementById('hamburgerToggle');
    const navbar = document.getElementById('navbar');
    hamburger.addEventListener('click', onHamburgerClick );
    
     function onHamburgerClick() {
        if (navbar.classList.contains('open')) {
            navbar.classList.remove('open');
            return;
        }
        navbar.classList.add('open');
        
    } 