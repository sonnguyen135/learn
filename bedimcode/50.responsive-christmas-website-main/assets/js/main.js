const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


/*================SCROLL SELECTION ACTIVE LINK==================*/
const navLinks = $$('.nav__link');
const sections = $$('section[id]');
const aId = {};


navLinks.forEach((e)=>{
    let id = e.getAttribute('href');
    aId[id] = e;

    e.onclick = function(){
        navMenu.classList.remove('show-menu');
    }
})

window.onscroll = function(){
    sections.forEach(function(s){
        let top = s.offsetTop - 50;
        let bottom = top + s.offsetHeight;

        if (scrollY >= top && scrollY < bottom){
            navLinks.forEach(e=>e.classList.remove('active'));
            let id = '#'+s.getAttribute('id');
            if (aId.hasOwnProperty(id)) aId[id].classList.add('active');
        }
    })
}

/*================Toggle Menu==================*/
const navMenu = $('.nav__menu');
const navToggle = $('.nav__toggle');
const navClose = $('.nav__close');

if (navMenu && navToggle && navClose) {
   
    navToggle.onclick = function(){
        navMenu.classList.add('show-menu');
    }

    navClose.onclick = function(){
        navMenu.classList.remove('show-menu');
    }
}



/*================== SCROLL HEADER =====================*/
const header = $('header');

function scrollHeader(){
    if (scrollY >=50)
        header.classList.add('scroll-header');
    else
        header.classList.remove('scroll-header');
}

window.addEventListener('scroll',scrollHeader);

/*================== SCROLL UP =================*/
const scrollTop = $('#scroll-up');

function scrollTopFunc(){
    if (scrollY >= 500)
        scrollTop.classList.add('show-scroll');
    else
        scrollTop.classList.remove('show-scroll');
}

window.addEventListener('scroll',scrollTopFunc);


/*=== CHANGE THEME ===*/
const changeTheme = $('#change-theme');
const body = $('body');
const getCurrentTheme = () =>  body.classList.contains(THEME_NAME) ? 'dark' : 'light'; 
const THEME_KEY = 'chirstmas_theme';
const THEME_NAME = 'dark-theme';
const THEME_ICON = 'bx-sun';

const selectedTheme = localStorage.getItem(THEME_KEY);

if (selectedTheme === 'dark'){
    body.classList.add(THEME_NAME);
    changeTheme.classList.toggle(THEME_ICON);
}
    

changeTheme.onclick = function(){
    body.classList.toggle(THEME_NAME);
    this.classList.toggle(THEME_ICON);

    localStorage.setItem(THEME_KEY, getCurrentTheme());
}

/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 24,
    loop: 'true',
    slidesPerView: "auto",
    centeredSlides: true,
    
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
        992: {
          spaceBetween: 80,
        },
    },
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
  })
  
  sr.reveal(`.home__img, .new__container, .footer__container`)
  sr.reveal(`.home__data`, {delay: 500})
  sr.reveal(`.giving__content, .gift__card`,{interval: 100})
  sr.reveal(`.celebrate__data, .message__form, .footer__img1`,{origin: 'left'})
  sr.reveal(`.celebrate__img, .message__img, .footer__img2`,{origin: 'right'})