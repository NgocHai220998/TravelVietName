

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
    // Review
    {
        let countStar = 0;
        let comment = document.getElementById('comment');
        let containerComment = document.getElementById('text');
        let report = document.querySelector('.report');
        comment.onclick = function(){
            containerComment.classList.add('text--comment');
            
        }

        comment.onblur = function(){
            containerComment.classList.remove('text--comment');
            //console.log(comment.value);
        }
        

        let label = document.querySelectorAll('.report__content__rating label');
        let btnSucess = document.getElementsByClassName('report__content__success__button');
        //console.log(label);
        for (let i = 0 ; i < label.length ; ++i){
            label[i].onclick = function(){
                countStar = this.getAttribute('countStar');
                //console.log(countStar);
            }
        }

        btnSucess[0].onclick = function(){
            if(countStar !== 0 && comment.value.length > 0){
                //do something
                console.log("hihi");
            }
        }
        
        setInterval(function(){
            if(countStar !== 0 && comment.value.length > 0){
                btnSucess[0].classList.add('isRun');
            }else{
                btnSucess[0].classList.remove('isRun');
            }
        },500);

        let like = document.querySelector('.report__content__like__button .fab.fa-gratipay');
        let borderLike = document.querySelector('.report__content__like__button .fab.fa-gratipay span');

        like.onclick = function(){
            this.classList.toggle('isLike');
            borderLike.classList.toggle('isLike');
            if(this.getAttribute('like') === 'true'){
                this.setAttribute('like','false');
            }else{
                this.setAttribute('like','true');
            }
        }


        let backReport = document.querySelector('.report .backReport .fa-window-close');
        let boxReport = document.querySelector('.report');
        let mainPost = document.querySelector('main.container');
        let btnDisplayBoxReport = document.querySelector('.container__centerHost__header__host__footer');
 
        btnDisplayBoxReport.onclick = function(){
            mainPost.style.display = 'none';
            boxReport.classList.add('displayReport');
        }
        
        backReport.onclick = function(){
            //console.log("hihi");
            boxReport.classList.remove('displayReport');
            mainPost.style.display = 'block';
            borderLike.classList.remove('isLike');
            like.classList.remove('isLike');
            like.setAttribute('like','false');
            comment.value = "";
        }
        //console.log(btnDisplayBoxReport);
    }
},false);