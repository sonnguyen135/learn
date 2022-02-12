const items = document.querySelectorAll('.accordion__header');

items.forEach((e)=>{
    e.onclick = function(){

        toggle(this);
    }
});

function toggle(e){
    const parent = e.parentElement;
    const content = parent.querySelector('.accordion__content');

    const parentOpen = document.querySelector('.accordion__item.accordion-open');

    if (parent.classList.contains('accordion-open')){
        contentClose(parent, content);
    }
    else{
        if (parentOpen){
            const contentOpen = parentOpen.querySelector('.accordion__content');
    
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