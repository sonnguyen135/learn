const navToggle = document.querySelector('.header__toggle');
const navMenu = document.querySelector('.nav');
const navLink = document.querySelectorAll('.nav__link');

if (navToggle && navMenu){
    console.log(navToggle,navMenu);
    navToggle.onclick = function(){
        navMenu.classList.toggle('showMenu');
    }
}

navLink.forEach((e)=>{
    e.onclick = function(){
        navLink.forEach(el => el.classList.remove('active'));
        this.classList.add('active');
    }
});