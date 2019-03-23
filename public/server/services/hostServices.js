
var host = angular.module("host");


host.factory('hostSecvices', ['$http', function ($http) {
    return {
        getCookie: () => {
            return $http.get('/home/getCookie');
        },
        getUserMain : (email)=>{
            return $http.get('/home/getUserMain/' + email);
        }
    }
}]);