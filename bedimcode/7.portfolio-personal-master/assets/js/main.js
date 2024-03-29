const navToggle = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav__menu');

if (navToggle && navMenu){
    navToggle.onclick = function(){
        navMenu.classList.toggle('show');
    }
}
/* Overlay */
gsap.to(".first",{duration: 1.5,delay: 0.5, top: "-100%", ease: Expo.easeInOut});
gsap.to(".second",{duration: 1.5,delay: 0.7, top: "-100%", ease: Expo.easeInOut});
gsap.to(".third",{duration: 1.5,delay: 0.9, top: "-100%", ease: Expo.easeInOut});

// IMG
gsap.from('.home__img', {opacity: 0, duration: 2, delay: 2, x: 60})

// INFORMATION
gsap.from('.home__information', {opacity: 0, duration: 3, delay: 2.3, y: 25})
gsap.from('.anime-text', {opacity: 0, duration: 3, delay: 2.3, y: 25, ease:'expo.out', stagger: .3})

// NAV ITEM
gsap.from('.nav__logo', {opacity:0, duration: 3, delay: 3.2, y: 25, ease:'expo.out'});
gsap.from('.nav__item', {opacity: 0, duration: 3, delay: 3.2, y: 25, ease:'expo.out', stagger: .2})

// SOCIAL
gsap.from('.home__social-icon', {opacity: 0, duration: 3, delay: 4, y: 25, ease:'expo.out', stagger: .2})   
