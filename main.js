const desktopMenu = document.querySelector('.desktop-menu');

const menuIcon = document.querySelector('.menu');

menuIcon.addEventListener('click',toogleDesktopMenu);

function toogleDesktopMenu(){

    desktopMenu.classList.toggle('inactive');
    
};