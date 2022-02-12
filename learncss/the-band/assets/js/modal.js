if (typeof HTMLElement.prototype.showModal == "undefined") {
    HTMLElement.prototype.showModal = function () {
        const body = document.body;
        if (!body.classList.contains('body-modal-open')){
            body.classList.add('body-modal-open');
           
            this.classList.add('modal-open');
           
            const modalContainer = this.querySelector('.modal-container');
           
            modalContainer.style.animation = 'slideFromTop 0.2s linear 0.2s forwards';
           
            this.addEventListener('click',(e)=>{
                if (e.target.classList.contains('modal'))
                    e.target.removeModal();
            });
        }
    }
}

if (typeof HTMLElement.prototype.removeModal == "undefined") {
    HTMLElement.prototype.removeModal = function () {
        const body = document.body;
        if (body.classList.contains('body-modal-open')){

            const modalContainer = this.querySelector('.modal-container');

            modalContainer.style.animation = 'slideToTop 0.2s linear forwards';
            
            setTimeout(()=>{
                this.classList.remove('modal-open');
                body.classList.remove('body-modal-open');
            },500);
        }
    }
}

function closeModal(e){
    const modalElement = e.parentElement.parentElement.parentElement;
    modalElement.removeModal();

}