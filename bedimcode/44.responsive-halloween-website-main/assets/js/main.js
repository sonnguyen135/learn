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

/*=============== HOME SWIPER ===============*/
let homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: 'true',
    autoplay: {
        delay: 8000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
})

/*==================== SWIPER NEW ====================*/
let swiper = new Swiper(".new-swiper", {
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 16
});


/*=== SCROLL HEADER ==*/
const scrollTop = $('#scroll-up');

function scrollTopFunc(){
    if (scrollY >= 560)
        scrollTop.classList.add('show-scroll');
    else
        scrollTop.classList.remove('show-scroll');
}

window.addEventListener('scroll',scrollTopFunc);


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home-swiper, .new-swiper, .newsletter__container`)
sr.reveal(`.category__data, .trick__content, .footer__content`,{interval: 100})
sr.reveal(`.about__data, .discount__img`,{origin: 'left'})
sr.reveal(`.about__img, .discount__data`,{origin: 'right'})
