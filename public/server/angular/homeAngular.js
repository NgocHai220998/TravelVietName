

var home = angular.module("home",[]);

home.controller('homeController',['$scope','homeSecvices',function($scope,homeSecvices){

    // Get info userMain
    homeSecvices.getCookie().then((email)=>{
        homeSecvices.getUserMain(email.data.email).then((user)=>{
            $scope.userMain = user.data;
            if($scope.userMain){
                document.querySelectorAll('.container__header__center article aside a')[1].innerHTML = "Thành phố";
                document.querySelectorAll('.container__header__center article aside a')[2].innerHTML = "Host";
                document.querySelectorAll('.container__header__center div a')[0].innerHTML = "Đăng xuất";
                document.querySelectorAll('.container__header__icon .hidenMenu a')[1].innerHTML = "Thành phố";
                document.querySelectorAll('.container__header__icon .hidenMenu a')[2].innerHTML = "Host";
                document.querySelectorAll('.container__header__icon .hidenMenu a')[3].innerHTML = "Đăng xuất";
            }
        });
    });
}]);