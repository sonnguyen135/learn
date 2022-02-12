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

/*================== Toggle Cart ====================*/
const navShop = $('.nav__shop');
const cart = $('#cart');
const cartClose = $('#cart-close');

if (navShop && cart && cartClose){
    navShop.onclick = function(){
        cart.classList.add('show-cart');
    }

    cartClose.onclick = function(){
        cart.classList.remove('show-cart');
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

/*=============== TESTIMONIAL SWIPER ===============*/
let testimonialSwiper = new Swiper(".testimonial-swiper", {
    spaceBetween: 30,
    loop: 'true',

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 24,
    loop: 'true',

    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
    },
});

/*=== CHANGE THEME ===*/
const changeTheme = $('#theme-button');
const body = $('body');
const getCurrentTheme = () =>  body.classList.contains(THEME_NAME) ? 'dark' : 'light'; 
const THEME_KEY = 'watch_theme';
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
