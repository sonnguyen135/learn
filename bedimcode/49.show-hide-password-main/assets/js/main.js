const $ = document.querySelector.bind(document);
const inputOverlay = $('#input-overlay');
const inputPass = $('#input-pass');
const inputIcon = $('#input-icon');

if (inputOverlay && inputPass && inputIcon){
    inputIcon.onclick = function(){
        
        if (inputPass.type === 'password'){
            inputPass.type = 'text';
            inputIcon.classList.add('bx-show');
        }
        else{
            inputPass.type = 'password';
            inputIcon.classList.remove('bx-show');
        }

        inputOverlay.classList.toggle('overlay-content');

        // if (inputOverlay.classList.contains('overlay-content')){
        //     inputPass.setAttribute('type','password');
        //     inputIcon.classList.remove('bx-show');
        //     inputOverlay.classList.remove('overlay-content');
        // }else{
        //     inputPass.setAttribute('type','text');
        //     inputIcon.classList.add('bx-show');
        //     inputOverlay.classList.add('overlay-content');
        // }
    }
}
