

function toast({
    title = '',
    message = '',
    type='success',
    duration = 3000
}){
   let main = document.getElementById('toast');

   if (!main){
       const body = document.querySelector('body');

       main = document.createElement('div');

       main.id = 'toast';
       
       body.appendChild(main);
   }
       const toast = document.createElement('div');

       const icons = {
           success : 'fas fa-check-circle',
           info : 'fas fa-info-circle',
           warning : 'fas fa-exclamation-circle',
           error : 'fas fa-times-circle'
       }
    
       const removeTime = duration + 500;

       duration = (duration/1000).toFixed(2);

       toast.classList.add('toast','toast--'+type);

       toast.style.animation = `slideInLeft ease 0.3s , fadeOut linear 1s  ${duration}s forwards`;
       
       toast.innerHTML = `<div class="toast__icon">
                                <i class="${icons[type]}"></i>
                            </div>
                            <div class="toast__body">
                                <h3 class="toast__title">${title}</h3>
                                <p class="toast__msg">${message}<p>
                            </div>
                            <div class="toast__close" onclick="removeToast(this)">
                                <i class="fas fa-times"></i>
                            </div>`;

        main.appendChild(toast);

        setTimeout(function(){toast.remove()},removeTime);
             
}

function removeToast(element){
    element.parentElement.remove();
}