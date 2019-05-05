var cities = angular.module("cities");


cities.factory('citiesSecvices', ['$http', function ($http) {
    return {
        getCitiesInfo: () => {
            return $http.get('/api/getCitiesInfo');
        }
    }
}]);