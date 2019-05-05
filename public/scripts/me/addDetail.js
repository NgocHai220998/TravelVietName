document.addEventListener("DOMContentLoaded",function(){
    // display menu
    {
        let iconMenu = document.querySelector('.container__top__icon .fa-align-justify');
        let menu = document.querySelector('.container__top__icon .container__top__icon__item');
        iconMenu.onclick = function(){
            menu.classList.toggle('displayMenu');
        }

        let cityOption = document.querySelector("#city");
        let otherCity = document.querySelector("#otherCity");
        if(cityOption.value == "otherCity"){
            otherCity.classList.add('display');
        }
    }
    


},false);