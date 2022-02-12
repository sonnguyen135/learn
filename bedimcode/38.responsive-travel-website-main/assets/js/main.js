const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const navMenu = $('.nav__menu');
const navToggle = $('.nav__toggle');
const navClose = $('.nav__close');
const navLinks = $$('.nav__link');
const sections = $$('section[id]');
const aId = {};



/*================SCROLL SELECTION ACTIVE LINK==================*/
navLinks.forEach((e)=>{
    let id = e.getAttribute('href');
    aId[id] = e;

    e.onclick = function(){
        navMenu.classList.remove('showMenu');
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
if (navMenu && navToggle && navClose) {
    navToggle.onclick = function(){
        navMenu.classList.add('showMenu');
    }

    navClose.onclick = function(){
        navMenu.classList.remove('showMenu');
    }
}

navLinks.forEach((e) => {
    e.onclick = function(){
        navMenu.classList.remove('showMenu')
    }
});


/*=== SCROLL HEADER ==*/
const header = $('header');

function scrollHeader(){
    if (scrollY >=200)
        header.classList.add('scroll-header');
    else
        header.classList.remove('scroll-header');
}

window.addEventListener('scroll',scrollHeader);

/*=== SCROLL HEADER ==*/
const scrollTop = $('#scroll-top');

function scrollTopFunc(){
    if (scrollY >= 560)
        scrollTop.classList.add('show-scroll-top');
    else
        scrollTop.classList.remove('show-scroll-top');
}

window.addEventListener('scroll',scrollTopFunc);


/*==================== SWIPER DISCOVER ====================*/
let swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
});

/*=== CHANGE THEME ===*/
const changeTheme = $('#theme-button');
const body = $('body');
const getCurrentTheme = () =>  body.classList.contains(THEME_NAME) ? 'dark' : 'light'; 
const THEME_KEY = 'travel_theme';
const THEME_NAME = 'dark-theme';
const THEME_ICON = 'ri-sun-line';

const selectedTheme = localStorage.getItem(THEME_KEY);

if (selectedTheme === 'dark')
    body.classList.add(THEME_NAME);

changeTheme.onclick = function(){
    body.classList.toggle(THEME_NAME);
    this.classList.toggle(THEME_ICON);

    localStorage.setItem(THEME_KEY, getCurrentTheme());
}


/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,
})


sr.reveal(`.home__data, .home__social-link, .home__info,
           .discover__container,
           .experience__data, .experience__overlay,
           .place__card,
           .sponsor__content,
           .footer__data, .footer__rights`,{
    origin: 'top',
    interval: 100,
})

sr.reveal(`.about__data, 
           .video__description,
           .subscribe__description`,{
    origin: 'left',
})

sr.reveal(`.about__img-overlay, 
           .video__content,
           .subscribe__form`,{
    origin: 'right',
    interval: 100,
})


/*==== PLAY VIDEO ====*/
const video = $('#video-file');
const videoButton = $('#video-button');
const videoIcon = $('#video-icon');
const PLAY_ICON = 'ri-play-line';
const PAUSE_ICON = 'ri-pause-line';

videoButton.onclick = function(){

    if (video.paused) {
        video.play();
        videoIcon.classList.add(PAUSE_ICON);
        videoIcon.classList.remove(PLAY_ICON);
    }
    else{
        videoIcon.classList.add(PLAY_ICON);
        videoIcon.classList.remove(PAUSE_ICON);
        video.pause();
    }

}

function ended(){
    videoIcon.classList.add(PLAY_ICON);
    videoIcon.classList.remove(PAUSE_ICON);
}

video.addEventListener('ended',ended);

