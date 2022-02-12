const navMenu = document.querySelector('.nav__menu');
const navToggle = document.querySelector('.nav__toggle');

if (navMenu && navToggle){
    navToggle.onclick = function(){
        navMenu.classList.toggle('showMenu');
    }
}

/*==================== SWIPER JS ====================*/
let galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 0,
    slidesPerView: 0,
})

let galleryTop = new Swiper('.gallery-top', {
    effect: 'fade',
    loop: true,

    thumbs: {
      swiper: galleryThumbs
    }
})

/*==================== GSAP ANIMATION ====================*/
const controlImg = document.querySelectorAll('.controls__img')

function scrollAnimation(){
    gsap.from('.islands__subtitle', {opacity: 0, duration: .2, delay: .2, y: -20})
    gsap.from('.islands__title', {opacity: 0, duration: .3, delay: .3, y: -20})
    gsap.from('.islands__description', {opacity: 0, duration: .4, delay: .4, y: -20})
    gsap.from('.islands__button', {opacity: 0, duration: .5, delay: .5, y: -20})
    gsap.from('.islands__video-content', {opacity: 0, duration: .6, delay: .6, y: -20})

}

controlImg.forEach(c => c.addEventListener('click', scrollAnimation))
/*==================== SHOW POPUP ====================*/
const videoButton = document.querySelectorAll('.islands__video-icon');
const popupId = document.querySelector('#popup');
const closePopup = document.querySelector('#popup-close');

videoButton.forEach((e) => {
    e.onclick = function(){
        popupId.classList.add('showPopup');
    }
})

closePopup.onclick = function(){
    popupId.classList.remove('showPopup');
}

