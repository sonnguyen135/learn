const navMenu = document.querySelector(".nav__menu");
const navToggle = document.querySelector('.nav__toggle');

if (navMenu && navToggle){
    navToggle.onclick = function(){
        navMenu.classList.toggle('show');
    }
}

const sneakerColors = document.querySelectorAll('.sneaker__colors span');
const html = document.documentElement;
const sneakerColorShow = 0;
const sneakerImgs = document.querySelectorAll('.sneaker__img img');
const sizes = document.querySelectorAll('.size__tallas');

function changeColor(e,i){
    let color = e.getAttribute('color');

    sneakerColors.forEach(s => s.classList.remove('active'));
    e.classList.add('active');
    
    sneakerImgs.forEach(s => s.classList.remove('show'))
    sneakerImgs[i]?.classList.add('show');

    html.style.setProperty('--primary',color) ;
}

function changeSize(){
    sizes.forEach(s => s.classList.remove('active'));
    this.classList.add('active');
}

sizes.forEach(s => s.onclick = changeSize)

sneakerColors.forEach((e,i)=>{
    
    if (i === sneakerColorShow) {
        changeColor(e,i);
    }
    e.addEventListener('click',function(){
        changeColor(e,i);
    });
});




