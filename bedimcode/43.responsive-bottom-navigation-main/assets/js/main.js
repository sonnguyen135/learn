
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
/*================SCROLL SELECTION ACTIVE LINK==================*/

const navLinks = $$('.nav__link');
const sections = $$('section[id]');
const aId = {};

navLinks.forEach((e)=>{
    let id = e.getAttribute('href');
    aId[id] = e;
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

