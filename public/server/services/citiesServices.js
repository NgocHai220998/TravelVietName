var cities = angular.module("cities");


cities.factory('citiesSecvices', ['$http', function ($http) {
    return {
        getCitiesInfo: () => {
            return $http.get('/api/getCitiesInfo');
        },
        sendCityID: (cityID) => {
            return $http.post('/city', cityID);
        },
        // getCityPage: () => {
        //     return $http.get('/city/sp');
        // }
    }
}]);