
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const navMenu = $('.nav__menu');
const navToggle = $('.nav__toggle');

if (navMenu && navToggle){
    navToggle.onclick = function(){
        navMenu.classList.toggle('show');
    }
}

function scroll(elementTo,elementClick){

    elementClick.addEventListener('click',(e)=>{
        e.preventDefault();
        elementTo.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    });
}

const aNav = navMenu.querySelectorAll('a');
let sections  = [];

aNav.forEach((e,i)=>{
    let id = e.getAttribute('href');
    let section = $(id);
    if (section) sections.push(section);
});

window.onscroll = (e,i) =>{
    
    sections.forEach((section,i)=>{
        let top = section.offsetTop - 50;
        let bottom =  top + section.offsetHeight;
        if (scrollY  >= top && scrollY <bottom){
            aNav.forEach(e=>e.classList.remove('active'))
            aNav[i].classList.add("active");
        }
    })

}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
sr.reveal('.skills__bar',{width: 0}); 
