
var home = angular.module("home");


home.factory('homeSecvices', ['$http', function ($http) {
    return {
        getCookie: () => {
            return $http.get('/home/getCookie');
        },
        getUserMain : (email)=>{
            return $http.get('/home/getUserMain/' + email);
        },
        getPosts : () => {
            return $http.get('/api/getPosts');
        },
        getCitiesInfo: () => {
            return $http.get('/api/getCitiesInfo');
        }
    }
}]);