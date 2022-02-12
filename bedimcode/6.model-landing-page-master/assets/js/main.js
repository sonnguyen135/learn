const navMenu = document.querySelector('.nav__menu');
const navToggle = document.querySelector('#nav-toggle');
const navClose = document.querySelector('#nav-close');

if (navMenu && navToggle && navClose){
    navToggle.onclick = function(){
        navMenu.classList.add('show');
    }

    navClose.onclick = function(){
        navMenu.classList.remove('show');
    }
}