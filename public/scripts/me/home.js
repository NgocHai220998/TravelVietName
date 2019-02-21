


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





},false);

