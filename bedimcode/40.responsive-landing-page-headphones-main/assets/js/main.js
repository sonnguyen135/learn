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

if (navMenu && navToggle){
    navToggle.onclick = function(){
        navMenu.classList.add('showMenu');
    }

    navClose.onclick = function(){
        navMenu.classList.remove('showMenu');
    }
}

/*================Scroll Up============================*/
const scrollTop = $('#scroll-top');

function scrollTopFunc(){
    if (scrollY >= 100)
        scrollTop.classList.add('show-scroll');
    else
        scrollTop.classList.remove('show-scroll');
}

window.addEventListener('scroll',scrollTopFunc);



/*================Scroll Header============================*/
const header = $('header');

function scrollHeader(){
    if (scrollY >=50)
        header.classList.add('scroll-header');
    else
        header.classList.remove('scroll-header');
}

window.addEventListener('scroll',scrollHeader);
