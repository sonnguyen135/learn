const inputElements = document.querySelectorAll('.form__input');

inputElements.forEach(function(e){
    e.onfocus = function(){
        this.parentElement.parentElement.classList.add('focus');
    }

    e.onblur = function(){
        if (this.value === '')
            this.parentElement.parentElement.classList.remove('focus');
    }
});