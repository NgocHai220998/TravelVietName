var cities = angular.module("cities", []);

cities.controller('citiesController', ['$scope', 'citiesSecvices', async function ($scope, citiesSecvices){

    citiesSecvices.getCitiesInfo().then((citiesInfo) => {
        $scope.citiesInfo = citiesInfo.data;
        
    })
    $scope.showDetail = function (ID) {
        cityID = {
            cityID: ID
        }
        citiesSecvices.sendCityID(cityID).then((res) => {
            console.log(res);
        })
        location.reload();
    }
}])