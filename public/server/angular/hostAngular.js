

var host = angular.module("host",[]);

host.controller('hostController',['$scope','hostSecvices',function($scope,hostSecvices){

    $scope.name = "Nguyen Ngoc Hai";
    // Get info userMain
    hostSecvices.getCookie().then((email)=>{
        hostSecvices.getUserMain(email.data.email).then((user)=>{
            $scope.userMain = user.data;
            if($scope.userMain){
                document.querySelectorAll('.container__top .container__top__icon .container__top__icon__item a')[3].innerHTML = "Đăng xuất";
                document.querySelectorAll('.container__top .container__top__menu a')[2].innerHTML = "Đăng xuất";
            }
        });
    });
}]);