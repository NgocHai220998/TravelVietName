

document.addEventListener("DOMContentLoaded",function(){
    // display menu
    {
        let iconMenu = document.querySelector('.container__top__icon .fa-align-justify');
        let menu = document.querySelector('.container__top__icon .container__top__icon__item');
        iconMenu.onclick = function(){
            menu.classList.toggle('displayMenu');
        }
    }
    


},false);