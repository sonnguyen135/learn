const navToggle = document.querySelector('#nav-toggle');
const navMenu = document.querySelector('.nav__menu');

if (navToggle && navMenu){
    navToggle.onclick = function(){
        navMenu.classList.toggle('show');
    }
}