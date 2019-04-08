var login = angular.module("login");

login.factory('loginServices', ['$http', function ($http) {
    return {
        getUsers: () => {
            return $http.get('/api/getUsers');
        },
        checkLogin: (info) => {
            return $http.get('/login/checkInfo',info);
        }
    }
}]);