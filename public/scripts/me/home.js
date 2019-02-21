


document.addEventListener("DOMContentLoaded",function(){
    


    //** CONTAINER___TOP */
    {
        let listMenu = document.querySelector('.list-menu'); // list menu

        let btnIcon = document.querySelector('.top__menu__icon'); // icon menu
         
        //let inputSearch = document.querySelector('.content__search input'); 


        //console.log(inputSearch);
        btnIcon.onclick = function(){
            listMenu.classList.toggle('displayBlock');
        }
    }
    //END___CONTAINER___TOP




    
    //** CONTAINER___Content */
    {
        //** Conent WHY__US */
        {
            let whyUSNode = document.querySelectorAll('.why-us__bot ul li');
            let whyUsSlide = document.querySelectorAll('.container__content .why-us .why-us__container__content');
            //console.log(whyUSNode);
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

