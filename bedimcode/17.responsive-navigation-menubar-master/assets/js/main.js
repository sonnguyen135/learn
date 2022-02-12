const navToggle = document.querySelector('#nav-toggle');
const navMenu = document.querySelector('nav');
const navClose = document.querySelector('#nav-close');
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(function(e){
    
    e.onclick = () => {
        navLinks.forEach(e=> e.classList.remove('active'));
        navMenu.classList.remove('show');
        e.classList.add('active');
    }
    
});

if (navToggle && navMenu && navClose){

    navToggle.onclick = function(){
        navMenu.classList.add('show');
    }

    navClose.onclick = function(){
        navMenu.classList.remove('show');
    }

}