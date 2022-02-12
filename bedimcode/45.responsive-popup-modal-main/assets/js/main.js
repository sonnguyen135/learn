const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const showModal = (button,modal) => {
    button.onclick = function(){
        modal.classList.add('show-modal');
    }

    const closeModal = $$.bind(modal)('.close-modal');
    if (closeModal){
        closeModal.forEach(e => {e.onclick = () => modal.classList.remove('show-modal')});
    }
}


showModal($('#open-modal'),$('#modal'));

