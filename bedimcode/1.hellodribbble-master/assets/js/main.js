const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.nav__menu');
console.log(navMenu,menuToggle);

menuToggle.onclick = function(){
    navMenu.classList.toggle('show');
}