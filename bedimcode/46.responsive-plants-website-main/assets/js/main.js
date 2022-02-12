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

/*================== SCROLL HEADER =================*/
const scrollTop = $('#scroll-up');

function scrollTopFunc(){
    if (scrollY >= 500)
        scrollTop.classList.add('show-scroll');
    else
        scrollTop.classList.remove('show-scroll');
}

window.addEventListener('scroll',scrollTopFunc);


/*====================== Accrodation ==========================*/
const items = $$('.questions__header');

items.forEach((e)=>{
    e.onclick = function(){

        toggle(this);
    }
});

function toggle(e){
    const parent = e.parentElement;

    const content = parent.querySelector('.questions__content');

    const parentOpen = $('.questions__item.accordion-open');

    if (parent.classList.contains('accordion-open')){
        contentClose(parent, content);
    }
    else{
        if (parentOpen){
            const contentOpen = parentOpen.querySelector('.questions__content');
    
            contentClose(parentOpen, contentOpen);
        }
        
        contentOpen(parent, content);
    }
}

function contentClose(parent, content){
    parent.classList.remove('accordion-open');

    if (content.style.removeProperty) {
        content.style.removeProperty('height');
    } else {
        content.style.removeAttribute('height');
    }
}

function contentOpen(parent, content){
    parent.classList.add('accordion-open');
    const heightContent = content.scrollHeight;
    content.style.height = heightContent + 'px';
}

/*=== CHANGE THEME ===*/
const changeTheme = $('#theme-button');
const body = $('body');
const getCurrentTheme = () =>  body.classList.contains(THEME_NAME) ? 'dark' : 'light'; 
const THEME_KEY = 'plants_theme';
const THEME_NAME = 'dark-theme';
const THEME_ICON = 'ri-sun-line';

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
