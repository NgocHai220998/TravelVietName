

var topDetail = angular.module("topDetail",[]);


topDetail.controller('topController',['$scope','topSecvices',function($scope,topSecvices){

    $scope.name = "Nguyen Ngoc Hai";
    // Get info userMain
    topSecvices.getCookie().then((email)=>{
        topSecvices.getUserMain(email.data.email).then((user)=>{
            $scope.userMain = user.data;
            if($scope.userMain){
                document.querySelectorAll('.container__top .container__top__icon .container__top__icon__item a')[3].innerHTML = "Đăng xuất";
                document.querySelectorAll('.container__top .container__top__menu a')[2].innerHTML = "Đăng xuất";
            }
        });
    });
}]);