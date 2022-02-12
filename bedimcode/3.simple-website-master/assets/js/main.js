const toggleButton = document.querySelector('#nav-toggle');
const navMenu = document.querySelector('#nav-menu');

if (toggleButton && navMenu){
    toggleButton.onclick = function(){
        navMenu.classList.toggle('show');
    }
}