

var city = angular.module("city",[]);

city.controller('cityController',['$scope','citySecvices',function($scope,citySecvices){

    $scope.name = "Nguyen Ngoc Hai";
    // Get info userMain
    citySecvices.getCookie().then((email)=>{
        citySecvices.getUserMain(email.data.email).then((user)=>{
            $scope.userMain = user.data;
            if($scope.userMain){
                document.querySelectorAll('.container__top .container__top__icon .container__top__icon__item a')[3].innerHTML = "Đăng xuất";
                document.querySelectorAll('.container__top .container__top__menu a')[2].innerHTML = "Đăng xuất";
            }
        });
    });
    
    let nameID = window.location.pathname.split('/');

    citySecvices.getCityByName(nameID[2]).then((data) => {
        $scope.posts = data.data.posts;
        $scope.cityInfo = data.data.cityInfo;
        console.log(data)
    })

}]);