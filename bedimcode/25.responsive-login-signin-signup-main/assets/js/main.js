const signIn = document.querySelector('#sign-in');
const signUp = document.querySelector('#sign-up');
const signInForm = document.querySelector('.login__signin');
const signUpForm = document.querySelector('.login__signup');



if (signIn && signUp && signInForm && signUpForm) {

    signIn.onclick = function(){

        signInForm.classList.add('block');
        signUpForm.classList.remove('block');
    } 

    signUp.onclick = function(){
        
        signUpForm.classList.add('block');
        signInForm.classList.remove('block');
    } 
}