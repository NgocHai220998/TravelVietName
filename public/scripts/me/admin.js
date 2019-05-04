

document.addEventListener("DOMContentLoaded",function(){
    // display menu
    {
        let iconMenuOption = document.querySelector('.container__top__icon .fa-align-justify');
        let menuOption = document.getElementById('container__top__icon__item__option');
        iconMenuOption.onclick = function(){
            menuOption.classList.toggle('displayMenu');
        }

        let iconMenuNotification = document.querySelector('.container__top__icon .fa-globe-americas');
        let menuNotification = document.getElementById('container__top__icon__item__notification');
        iconMenuNotification.onclick = function(){
            menuNotification.classList.toggle('displayMenu');
        }
    }
    


},false);