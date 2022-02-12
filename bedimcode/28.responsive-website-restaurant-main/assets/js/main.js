const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const navToggle = $('.nav__toggle');
const navMenu = $('.nav__menu');
const sections = $$('section[id]');
const as = $$('.nav__link');
const aId = {};
const changeTheme = $('#theme-button');
const body = $('body');
const scroll = $('#scroll-top');
const header = $('header');


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
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = ()=> body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => changeTheme.classList.contains(iconTheme) ? 'dark' : 'light';

if (selectedTheme)
{
    body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    changeTheme.classList[selectedIcon === 'dark' ? 'add' : 'remove'](iconTheme);
}

changeTheme.onclick = function(){
    this.classList.toggle(iconTheme);
    body.classList.toggle(darkTheme);

    localStorage.setItem('selected-theme',getCurrentTheme());
    localStorage.setItem('selected-icon',getCurrentIcon());
}

/*================SCROLL TOP==================*/
function scrollTop(){
    if (scrollY >= 560)
        scroll.classList.add('scroll-top');
    else
        scroll.classList.remove('scroll-top');
}

window.addEventListener('scroll',scrollTop);

/*================SCROLL HEADER==================*/

function scrollHeader(){
    if(scrollY >= 200)
        header.classList.add('scroll-header');
    else
        header.classList.remove('scroll-header');
}

window.addEventListener('scroll',scrollHeader);

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .services__box, .menu__box,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`, {
    interval: 200
})