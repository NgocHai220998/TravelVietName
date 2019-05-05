var book = angular.module("book", []);

book.controller('bookController', ['$scope', 'bookSecvices', async function ($scope, bookSecvices){
    let url = window.location.pathname.split('/');
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
                guestNumber: $scope.guest
            }
            bookSecvices.bookPost(url[2], bookDetail).then((data) => {
                alert('Successful');
                console.log(data);
            })
        }
    })

    
}])