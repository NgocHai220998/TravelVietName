

document.addEventListener("DOMContentLoaded",function(){
    // display menu
    {
        let iconMenu = document.querySelector('.container__top__icon .fa-align-justify');
        let menu = document.querySelector('.container__top__icon .container__top__icon__item');
        iconMenu.onclick = function(){
            menu.classList.toggle('displayMenu');
        }
    }
    
    let postOption = document.getElementById('#postOption');
    let bookingOption = document.getElementById('#bookingOption');
    let post = document.querySelector('.container__center__post');
    let booking = document.querySelector('.container__center__booking');

    postOption.onclick = function () {
        
    }

},false);