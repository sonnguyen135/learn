const navMenu = document.querySelector('.nav');
const navToggle = document.querySelector('#header-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(function(e){
    
    e.onclick = ()=> {
        navLinks.forEach(e=>e.classList.remove('active'));
        e.classList.add('active');
    }
});

if (navMenu && navToggle){
    navToggle.onclick = function(){
        navMenu.classList.toggle('show');
    }
}