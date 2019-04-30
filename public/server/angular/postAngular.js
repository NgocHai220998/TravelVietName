var post = angular.module("post", []);

post.controller("postController", [
  "$scope",
  "postSecvices",
  function($scope, postSecvices) {
    let pathArray = window.location.pathname.split("/");
    // Get info userMain
    postSecvices.getCookie().then(email => {
      postSecvices.getUserMain(email.data.email).then(user => {
        $scope.userMain = user.data;
        if ($scope.userMain) {
          document.querySelectorAll(
            ".container__top .container__top__icon .container__top__icon__item a"
          )[3].innerHTML = "Đăng xuất";
          document.querySelectorAll(
            ".container__top .container__top__menu a"
          )[2].innerHTML = "Đăng xuất";
        }
      });
    });

    postSecvices.getPostById(pathArray[2]).then(post => {
      $scope.post = post.data;

      console.log($scope.post.host);
      postSecvices.getHostPost($scope.post.host).then(host => {
        $scope.hostPost = host.data;
      });

      document.getElementById("post-text-what").innerHTML =
        $scope.post.post.toDo;
      document.getElementById("post-text-provide").innerHTML =
        $scope.post.post.provide;
      document.getElementById("post-text-who").innerHTML = $scope.post.post.who;
      document.getElementById("post-text-why").innerHTML = $scope.post.post.why;

      /**
       * report
       */
      {
        let countStar = 0;
        for (let i = 0; i < 5; ++i) {
          document.getElementsByClassName("countStarReport")[
            i
          ].onclick = function() {
            countStar = parseInt(this.getAttribute("countStar"));
          };
        }

        $scope.clickSuccessReport = function() {
          const textReport = document.getElementById("comment").value;
          if (countStar !== 0 && textReport !== "") {
            const userComment = {
              star: countStar,
              name: $scope.userMain.fullName,
              content: textReport
            };
            postSecvices.sendReport($scope.post._id, userComment).then(post => {
              console.log(post);
              document
                .getElementsByClassName("report")[0]
                .classList.remove("displayReport");

              document.querySelector("main.container").style.display = "block";
            });
          }
        };
      }

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
          iconMenu.onclick = function() {
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

          background.onclick = function() {
            show.style.display = "none";
          };
          //console.log(postImage);
          nodeLeft.onclick = function() {
            let index = parseInt(Image.getAttribute("index"));
            if (index === listImage.length - 1) {
              index = 0;
            } else {
              index = index + 1;
            }
            Image.setAttribute("index", index);
            Image.setAttribute("src", listImage[index].getAttribute("src"));
          };
          nodeRight.onclick = function() {
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
            postImage[i].onclick = function() {
              let index = parseInt(this.getAttribute("index"));
              Image.setAttribute("index", index);
              Image.setAttribute("src", this.getAttribute("src"));
              show.style.display = "block";
            };
          }
          btnMore.onclick = function() {
            Image.setAttribute("index", 0);
            Image.setAttribute("src", listImage[0].getAttribute("src"));
            show.style.display = "block";
          };
        }

        /////////////////////////////////////////////////////
        // Review
        {
          let countStar = 0;
          let comment = document.getElementById("comment");
          let containerComment = document.getElementById("text");
          let report = document.querySelector(".report");
          comment.onclick = function() {
            containerComment.classList.add("text--comment");
          };

          comment.onblur = function() {
            containerComment.classList.remove("text--comment");
            //console.log(comment.value);
          };

          let label = document.querySelectorAll(
            ".report__content__rating label"
          );
          let btnSucess = document.getElementsByClassName(
            "report__content__success__button"
          );
          //console.log(label);
          for (let i = 0; i < label.length; ++i) {
            label[i].onclick = function() {
              countStar = this.getAttribute("countStar");
              //console.log(countStar);
            };
          }

          btnSucess[0].onclick = function() {
            if (countStar !== 0 && comment.value.length > 0) {
              //do something
              console.log("hihi");
            }
          };

          setInterval(function() {
            if (countStar !== 0 && comment.value.length > 0) {
              btnSucess[0].classList.add("isRun");
            } else {
              btnSucess[0].classList.remove("isRun");
            }
          }, 500);

          let like = document.querySelector(
            ".report__content__like__button .fab.fa-gratipay"
          );
          let borderLike = document.querySelector(
            ".report__content__like__button .fab.fa-gratipay span"
          );

          like.onclick = function() {
            this.classList.toggle("isLike");
            borderLike.classList.toggle("isLike");
            if (this.getAttribute("like") === "true") {
              this.setAttribute("like", "false");
            } else {
              this.setAttribute("like", "true");
            }
          };

          let backReport = document.querySelector(
            ".report .backReport .fa-window-close"
          );
          let boxReport = document.querySelector(".report");
          let mainPost = document.querySelector("main.container");
          let btnDisplayBoxReport = document.querySelector(
            ".container__center__host__footer"
          );

          btnDisplayBoxReport.onclick = function() {
            mainPost.style.display = "none";
            boxReport.classList.add("displayReport");
          };

          backReport.onclick = function() {
            //console.log("hihi");
            boxReport.classList.remove("displayReport");
            mainPost.style.display = "block";
            borderLike.classList.remove("isLike");
            like.classList.remove("isLike");
            like.setAttribute("like", "false");
            comment.value = "";
          };
          //console.log(btnDisplayBoxReport);
        }
      }, 0);

      //end post.js
    });
  }
]);

post.filter("range", function() {
  return function(input, total) {
    total = parseInt(total);

    for (var i = 0; i < total; i++) {
      input.push(i);
    }

    return input;
  };
});
