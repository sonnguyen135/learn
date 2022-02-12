const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const navMenu = $('.nav__menu');
const navToggle = $('.nav__toggle');
const listSection =  $$('section[id]');
const listItems = $$('.nav__link');
const aId = {};

listItems.forEach((e)=>{
    let id = e.getAttribute('href');
    if(id) aId[id] = e.parentElement;

    e.onclick = function(){
        navMenu.classList.remove('show');
    }
})
console.log(aId);
window.onscroll = function(){
    listSection.forEach(function(s,i){
        let top = s.offsetTop - 50;
        let bottom = top + s.offsetHeight;
        if (scrollY >= top && scrollY < bottom){
            listItems.forEach(a=>a.parentElement.classList.remove('active'));
            let id = s.getAttribute('id');

            aId['#'+id].classList.add('active');
        }

    })
}

if (navMenu && navToggle){
    navToggle.addEventListener('click',function(){
        navMenu.classList.toggle('show');
    })
}


/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.home__title', {})
sr.reveal('.home__scroll', {delay: 200})
sr.reveal('.home__img', {origin:'right', delay: 400})

/*SCROLL ABOUT*/
sr.reveal('.about__img', {delay: 500})
sr.reveal('.about__title', {delay: 300})
sr.reveal('.about__subtitle', {delay: 400})
sr.reveal('.about__text', {delay: 500})
sr.reveal('.about__social-icon', {delay: 600, interval: 200})

/*SCROLL SKILLS*/
sr.reveal('.skills__title', {})
sr.reveal('.skills__name', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.skills__img', {delay: 400})

/*SCROLL PORTFOLIO*/
sr.reveal('.portfolio__img', {interval: 200})

/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', {interval: 200})
sr.reveal('.contact__input', {delay: 400})
sr.reveal('.contact__button', {delay: 600})




