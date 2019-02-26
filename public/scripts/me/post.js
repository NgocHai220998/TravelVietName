

document.addEventListener("DOMContentLoaded",function(){


    // display menu
    {
        let iconMenu = document.querySelector('.container__top__icon .fa-align-justify');
        let menu = document.querySelector('.container__top__icon .container__top__icon__item');
        iconMenu.onclick = function(){
            menu.classList.toggle('displayMenu');
        }
    }
    


    /////////////////////////////////////////////////////
    // slide

    {
        let containerSlide = document.querySelector('.container__center__slide .container__center__slide__content');
        let listImage = document.querySelectorAll('.container__center__slide__content .container__center__slide__content__image');
        
        let indexDefault = 0;
        function showSlide(){
            for(let i = 0 ; i < listImage.length ; ++i){
                listImage[i].classList.remove('displayImageTop');
                listImage[i].style.display = 'none';
            }

            if(window.innerWidth <= 500){
                if(indexDefault == listImage.length) indexDefault = 0;
                listImage[indexDefault].style.display = 'block';
                listImage[indexDefault].classList.add('displayImageTop');
                indexDefault++;

            }else if(window.innerWidth <= 800){
                for (let count = 0 ; count < 2; ++count){
                    if(indexDefault == listImage.length) indexDefault = 0;
                    listImage[indexDefault].style.display = 'block';
                    listImage[indexDefault++].classList.add('displayImageTop');
                }
                
            }else if(window.innerWidth <= 1100){
                for (let count = 0 ; count < 3; ++count){
                    if(indexDefault == listImage.length) indexDefault = 0;
                    listImage[indexDefault].style.display = 'block';
                    listImage[indexDefault++].classList.add('displayImageTop');
                }
            }else if(window.innerWidth <= 1500){
                for (let count = 0 ; count < 4; ++count){
                    if(indexDefault == listImage.length) indexDefault = 0;
                    listImage[indexDefault].style.display = 'block';
                    listImage[indexDefault++].classList.add('displayImageTop');
                }
            }else{
                for (let count = 0 ; count < 5; ++count){
                    if(indexDefault == listImage.length) indexDefault = 0;
                    listImage[indexDefault].style.display = 'block';
                    listImage[indexDefault++].classList.add('displayImageTop');
                }
            }
            setTimeout(showSlide,3000);
        }

        showSlide();
    }
    



},false);