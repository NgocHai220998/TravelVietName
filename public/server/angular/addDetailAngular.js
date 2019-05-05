var addDetail = angular.module("addDetail", []);

addDetail.controller('addDetailController', ['$scope', 'addDetailSecvices', async function ($scope, addDetailSecvices){

    addDetailSecvices.getCitiesInfo().then((citiesInfo) => {
        console.log(citiesInfo.data)
        $scope.citiesInfo = citiesInfo.data;
        
    })

}])