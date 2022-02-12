const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const navToggle = $('.nav__toggle');
const sidebar = $('.l-navbar');
const liItems = $$('.nav__item');

liItems.forEach(function(e){
    let subMenu = e.querySelector('.nav__submenu');
    //Kiểm tra tồn tại submenu k
    if (subMenu){

        //Check xem nếu được active thỉ mở collapse
        if (e.classList.contains('active'))
        {
            e.classList.toggle('collapse');
            subMenu.style.display = 'block';
            setHeight(subMenu);
            subMenu.style.removeProperty('display');
            e.querySelector('.nav__collapse').classList.toggle('rotate');
        }
        else
            clearHeightSubMenu(subMenu);
    } 

    //Bắt sự kiện event click, thêm class active và thực hiện collapse
    e.onclick = function(){
        liItems.forEach(e=>e.classList.remove('active'));
        this.classList.add('active');

        if (subMenu && sidebar.classList.contains('expander')) {
            collapseSection(subMenu,this);
            this.classList.toggle('collapse');
            this.querySelector('.nav__collapse').classList.toggle('rotate');
        }
    }
})

if (navToggle && sidebar){
    navToggle.onclick = function(){
        sidebar.classList.toggle('expander');
    }
}
  
function clearHeightSubMenu(element){
    element.style.marginTop = 0 + 'px';
    element.style.marginBottom = 0 + 'px';
    element.style.paddingTop = 0 + 'px';
    element.style.paddingBottom= 0 + 'px';
}

function setHeight(element){
    element.addEventListener('transitionend', function remove(e) {
        element.style.removeProperty('marginTop');
        element.style.removeProperty('marginBottom');
        element.style.removeProperty('paddingTop');
        element.style.removeProperty('paddingBottom');
        element.removeEventListener('transitionend', remove);
    });
    let sectionHeight = element.scrollHeight;
    element.style.height = sectionHeight + 'px';
}

function collapseSection(element,parentElement) {
    if (parentElement.classList.contains('collapse')){
        clearHeightSubMenu(element);
        element.style.removeProperty('height');
    }else{
        setHeight(element);
    }
}
