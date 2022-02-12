const sideBar = document.querySelector('#l-navbar');
const navToggle = document.querySelector('.nav__toggle');
const body = document.querySelector('body');

if (sideBar && navToggle){
    navToggle.onclick = function(){
        sideBar.classList.toggle('show');
        this.classList.toggle('rotate');
        body.classList.toggle('expander');
    }
}