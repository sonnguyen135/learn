const navToggle = document.querySelector('#header-toggle');
const navMenu =document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach((e) => {
    e.onclick = function(){
        navLinks.forEach(e => e.classList.remove('active'));
        this.classList.add('active');
    }
});

if (navToggle && navMenu){
    navToggle.onclick = function(){
        this.classList.toggle('bx-x');
        this.classList.toggle('show');
        navMenu.classList.toggle('show');
    }
}