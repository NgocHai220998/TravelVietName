
var city = angular.module("city");


city.factory('citySecvices', ['$http', function ($http) {
    return {
        getCookie: () => {
            return $http.get('/home/getCookie');
        },
        getUserMain : (email)=>{
            return $http.get('/home/getUserMain/' + email);
        },
        getCityByName: (name) => {
            return $http.get('/getCity/' + name);
        }
    }
}]);