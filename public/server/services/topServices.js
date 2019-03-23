
var topDetail = angular.module("topDetail");


topDetail.factory('topSecvices', ['$http', function ($http) {
    return {
        getCookie: () => {
            return $http.get('/home/getCookie');
        },
        getUserMain : (email)=>{
            return $http.get('/home/getUserMain/' + email);
        }
    }
}]);