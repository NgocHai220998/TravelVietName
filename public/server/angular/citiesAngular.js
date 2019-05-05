var cities = angular.module("cities", []);

cities.controller('citiesController', ['$scope', 'citiesSecvices', async function ($scope, citiesSecvices){

    citiesSecvices.getCitiesInfo().then((citiesInfo) => {
        $scope.citiesInfo = citiesInfo.data;
        
    })

}])