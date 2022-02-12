const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const navToggle = $('.nav__toggle');
const navMenu = $('.nav__menu');
const sections = $$('section[id]');
const as = $$('.nav__link');
const aId = {};
const body = $('body');


/*================SCROLL SELECTION ACTIVE LINK==================*/
as.forEach((e)=>{
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
            as.forEach(e=>e.classList.remove('active'));
            let id = '#'+s.getAttribute('id');
            if (aId.hasOwnProperty(id)) aId[id].classList.add('active');
        }
    })
}

if( navToggle && navMenu){
    navToggle.onclick = function(){
        navMenu.classList.toggle('showMenu');
    }
}
/*================CHANGE DARK THEME==================*/
const changeTheme = $('#theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-toggle-right'
const keyTheme = 'selected-theme-noel';

const getCurrentTheme = () => body.classList.contains(darkTheme) ? 'dark' : 'light';

const selectedTheme = localStorage.getItem(keyTheme);

if (selectedTheme === 'dark'){
    body.classList.add(darkTheme);
    changeTheme.classList.add(iconTheme);
}

changeTheme.onclick = function(){
    body.classList.toggle(darkTheme);
    changeTheme.classList.toggle(iconTheme);

    localStorage.setItem(keyTheme,getCurrentTheme());
}

/*================SCROLL TOP==================*/
const scrollTop = $('#scroll-top');

function scrollTopFunc(){
    if (scrollY >= 560)
        scrollTop.classList.add('show-scroll');
    else
        scrollTop.classList.remove('show-scroll');
}

window.addEventListener('scroll',scrollTopFunc);

/*================SCROLL HEADER==================*/
const header = $('header');

function scrollHeaderFunc(){
    if (scrollY >= 200)
        header.classList.add('scroll-header');
    else
        header.classList.remove('scroll-header');
}

window.addEventListener('scroll',scrollHeaderFunc);

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '30px',
    duration: 1800,
    reset: true,
});

sr.reveal(`.home__data, .home__img, 
           .decoration__box,
           .accessory__box,
           .footer__content`, {
    origin: 'top',
    interval: 200,
})

sr.reveal(`.share__img, .send__data`, {
    origin: 'left'
})

sr.reveal(`.share__data, .send__img`, {
    origin: 'right'
})