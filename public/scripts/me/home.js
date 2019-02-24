


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
            let imagePage = document.querySelectorAll('.clickImage');
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

            let backgroundImage = document.querySelector('.container .container__backgroundImage');
            let showImage = document.querySelector('.container .container__showImage');
            //console.log(backgroundImage.style.display);
            backgroundImage.onclick = function(){
                if(window.innerWidth > 0){
                    backgroundImage.style.display = "none";
                    showImage.style.display = "none";
                }
            }

            for(let i = 0 ; i < imageSlide.length ; ++i){
                imageSlide[i].onclick = function(){
                    if(window.innerWidth > 600){
                        showImage.setAttribute('src',this.getAttribute('link'));
                        backgroundImage.style.display = "block";
                        showImage.style.display = "block";
                    }
                    
                }
            }
            for(let i = 0 ; i < imagePage.length ; ++i){
                imagePage[i].onclick = function(){
                    if(window.innerWidth > 760){
                        showImage.setAttribute('src',this.getAttribute('link'));
                        backgroundImage.style.display = "block";
                        showImage.style.display = "block";
                    }
                    
                }
            }
            




        }
        //END_CONTEN_WHY_US
    }
    //END___CONTAINER___Content




},false);

