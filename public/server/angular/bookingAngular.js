var booking = angular.module("booking", []);

booking.controller('bookingController', ['$scope', 'bookingSecvices', async function ($scope, bookingSecvices) {
    let url = window.location.pathname.split('/');

    bookingSecvices.getBookingByID(url[2]).then((bookingData) => {
        $scope.booking = bookingData.data;
        bookingSecvices.getPostById(bookingData.data.postID).then((postDetail) => {
            $scope.post = postDetail.data;
            $scope.urlMap = 'https://maps.google.com/maps?q=' + $scope.post.city + '&t=&z=13&ie=UTF8&iwloc=&output=embed'
            console.log($scope.urlMap);
            bookingSecvices.getHostPost($scope.post.host).then((host) => {
                $scope.hostPost = host.data;
            });
            document.getElementById("post-text-what").innerHTML =
                $scope.post.post.toDo;
            document.getElementById("post-text-provide").innerHTML =
                $scope.post.post.provide;
            document.getElementById("post-text-who").innerHTML = $scope.post.post.who;
            document.getElementById("post-text-why").innerHTML = $scope.post.post.why;


            //post.js
            setTimeout(() => {
                // display menu
                {
                    let iconMenu = document.querySelector(
                        ".container__top__icon .fa-align-justify"
                    );
                    let menu = document.querySelector(
                        ".container__top__icon .container__top__icon__item"
                    );
                    iconMenu.onclick = function () {
                        menu.classList.toggle("displayMenu");
                    };
                }

                /////////////////////////////////////////////////////
                // slide
                {
                    let containerSlide = document.querySelector(
                        ".container__center__slide .container__center__slide__content"
                    );
                    let listImage = document.querySelectorAll(
                        ".container__center__slide__content .container__center__slide__content__image"
                    );

                    let indexDefault = 0;
                    function showSlide() {
                        for (let i = 0; i < listImage.length; ++i) {
                            listImage[i].classList.remove("displayImageTop");
                            listImage[i].style.display = "none";
                        }

                        if (window.innerWidth <= 500) {
                            if (indexDefault == listImage.length) indexDefault = 0;
                            listImage[indexDefault].style.display = "block";
                            listImage[indexDefault].classList.add("displayImageTop");
                            indexDefault++;
                        } else if (window.innerWidth <= 800) {
                            for (let count = 0; count < 2; ++count) {
                                if (indexDefault == listImage.length) indexDefault = 0;
                                listImage[indexDefault].style.display = "block";
                                listImage[indexDefault++].classList.add("displayImageTop");
                            }
                        } else if (window.innerWidth <= 1100) {
                            for (let count = 0; count < 3; ++count) {
                                if (indexDefault == listImage.length) indexDefault = 0;
                                listImage[indexDefault].style.display = "block";
                                listImage[indexDefault++].classList.add("displayImageTop");
                            }
                        } else if (window.innerWidth <= 1500) {
                            for (let count = 0; count < 4; ++count) {
                                if (indexDefault == listImage.length) indexDefault = 0;
                                listImage[indexDefault].style.display = "block";
                                listImage[indexDefault++].classList.add("displayImageTop");
                            }
                        } else {
                            for (let count = 0; count < 5; ++count) {
                                if (indexDefault == listImage.length) indexDefault = 0;
                                listImage[indexDefault].style.display = "block";
                                listImage[indexDefault++].classList.add("displayImageTop");
                            }
                        }
                        setTimeout(showSlide, 3000);
                    }

                    showSlide();
                }

                /////////////////////////////////////////////////////
                // show image
                {
                    let Image = document.querySelector(
                        ".container__show__content .container__show__content__image ._img"
                    );
                    let listImage = document.querySelectorAll(
                        ".container__show__content .list-image ._img"
                    );
                    let nodeLeft = document.querySelector(
                        ".container__show__content__image .fas.fa-angle-left"
                    );
                    let nodeRight = document.querySelector(
                        ".container__show__content__image .fas.fa-angle-right"
                    );
                    let show = document.querySelector(".container__show");
                    let background = document.querySelector(
                        ".container__show .container__show__background"
                    );
                    let postImage = document.querySelectorAll(
                        ".image__post .image__post__img"
                    );
                    let btnMore = document.getElementById("btn-more-img");

                    background.onclick = function () {
                        show.style.display = "none";
                    };
                    //console.log(postImage);
                    nodeLeft.onclick = function () {
                        let index = parseInt(Image.getAttribute("index"));
                        if (index === listImage.length - 1) {
                            index = 0;
                        } else {
                            index = index + 1;
                        }
                        Image.setAttribute("index", index);
                        Image.setAttribute("src", listImage[index].getAttribute("src"));
                    };
                    nodeRight.onclick = function () {
                        let index = parseInt(Image.getAttribute("index"));
                        if (index === 0) {
                            index = listImage.length - 1;
                        } else {
                            index = index - 1;
                        }
                        Image.setAttribute("index", index);
                        Image.setAttribute("src", listImage[index].getAttribute("src"));
                    };

                    for (let i = 0; i < postImage.length; ++i) {
                        postImage[i].onclick = function () {
                            let index = parseInt(this.getAttribute("index"));
                            Image.setAttribute("index", index);
                            Image.setAttribute("src", this.getAttribute("src"));
                            show.style.display = "block";
                        };
                    }
                    btnMore.onclick = function () {
                        Image.setAttribute("index", 0);
                        Image.setAttribute("src", listImage[0].getAttribute("src"));
                        show.style.display = "block";
                    };
                }

                /////////////////////////////////////////////////////
                // Review
                
            }, 0);
        })



    })


}]);