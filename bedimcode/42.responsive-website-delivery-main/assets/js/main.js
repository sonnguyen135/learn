const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

/*================ TOGGLE MENU =================*/
const navToggle = $('.nav__toggle');
const navMenu = $('.nav__menu');


if (navToggle && navMenu){
    navToggle.onclick = function(){
        navMenu.classList.toggle('show-menu');
    }
}


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

/*================Scroll Header============================*/
const header = $('header');

function scrollHeader(){
    if (scrollY >=50)
        header.classList.add('scroll-header');
    else
        header.classList.remove('scroll-header');
}

window.addEventListener('scroll',scrollHeader);


/*================Scroll Up============================*/
const scrollTop = $('#scroll-top');

function scrollTopFunc(){
    if (scrollY >= 100)
        scrollTop.classList.add('show-scroll');
    else
        scrollTop.classList.remove('show-scroll');
}

window.addEventListener('scroll',scrollTopFunc);

/*================ CHANGE THEME ===================*/
const changeTheme = $('#theme-button');
const body = $('body');
const getCurrentTheme = () =>  body.classList.contains(THEME_NAME) ? 'dark' : 'light'; 
const THEME_KEY = 'delivery_theme';
const THEME_NAME = 'dark-theme';
const THEME_ICON = 'bx-toggle-right';

const selectedTheme = localStorage.getItem(THEME_KEY);

if (selectedTheme === 'dark')
    body.classList.add(THEME_NAME);

changeTheme.onclick = function(){
    body.classList.toggle(THEME_NAME);
    this.classList.toggle(THEME_ICON);

    localStorage.setItem(THEME_KEY, getCurrentTheme());
}

/*================ ScrollReveal ===================*/

const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    reset: true,
})


sr.reveal(`.home__container, 
           .services__data`,{
    origin: 'top',
    interval: 100,
})

sr.reveal(`.about__container,
           .app__container`,{
    origin: 'left',
})

sr.reveal(`.security__container, 
           .contact__container,
           .footer__content,.footer__socials`,{
    origin: 'right',
    interval: 100,
})