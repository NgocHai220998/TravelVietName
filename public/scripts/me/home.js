


document.addEventListener("DOMContentLoaded",function(){


    // HEADER HOME
    {
        let iconTop = document.querySelector('.container__header .container__header__icon .fas.fa-align-justify'); // Lấy nút icon (media-mobile)
        let menu = document.querySelector('.container__header .container__header__icon aside');
        
        //console.log(menu);
        iconTop.onclick = function(){
            menu.classList.toggle('showMenu');
        }
        



    }
    // END HEADER HOME


     //** CONTAINER___Content */
     {
        //** Conent WHY__US */
        {
            let whyUSNode = document.querySelectorAll('.container__why__bot ul li');
            let whyUsSlide = document.querySelectorAll('.container .container__why__container__content');
            let imageSlide = document.querySelectorAll('.container .container__why__container__content__image');

            //console.log(imageSlide[0].getAttribute('link'));
            for(let i = whyUSNode.length - 1; i >= 0 ; --i){
                whyUSNode[i].onclick = function(){
                    for (let j = 0; j < whyUsSlide.length; j++) {
                        whyUsSlide[j].style.display = "none";  
                    }
                    for(let j = 0 ; j < whyUSNode.length ; ++j){
                        whyUSNode[j].classList.remove('backgroundActive');
                    }
                    this.classList.add('backgroundActive');
                    whyUsSlide[i].style.display = "block"; 
                }
            }
            // init slide default
            (function showWhyUsSlide() {
                whyUsSlide[0].style.display = "block";
                whyUSNode[0].classList.add('backgroundActive');
            })();
        }
        //END_CONTEN_WHY_US
    }
    //END___CONTAINER___Content




},false);

