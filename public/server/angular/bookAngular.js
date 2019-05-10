var book = angular.module("book", []);

book.controller('bookController', ['$scope', 'bookSecvices', async function ($scope, bookSecvices){
    let url = window.location.pathname.split('/');

    // Get info userMain
    bookSecvices.getCookie().then((email)=>{
        bookSecvices.getUserMain(email.data.email).then((user)=>{
            $scope.userMain = user.data;
            if($scope.userMain){
                document.querySelectorAll('.container__top .container__top__icon .container__top__icon__item a')[3].innerHTML = "Đăng xuất";
                document.querySelectorAll('.container__top .container__top__menu a')[2].innerHTML = "Đăng xuất";
            }
        });
    });
    

    bookSecvices.getPostById(url[2]).then((data) => {
        $scope.post = data.data;
        console.log(data)

        $scope.time = "";
        $scope.guest = 1;

        bookSecvices.getHostPost($scope.post.host).then((data) => {
            $scope.host = data.data;
            console.log($scope.host)
        })

        $scope.book = function () {
            let bookDetail = {
                time : $scope.time,
                guestNumber: $scope.guest,
                hostID: $scope.host._id
            }
            bookSecvices.bookPost(url[2], bookDetail).then((data) => {
                alert('Successful');
                console.log(data);
            })
        }
    })

    
}])