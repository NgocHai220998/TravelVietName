var addDetail = angular.module("addDetail");


addDetail.factory('addDetailSecvices', ['$http', function ($http) {
    return {
        getCitiesInfo: () => {
            return $http.get('/api/getCitiesInfo');
        },
        addDetail: (post) => {
            return $http.post('/adddetail', post)
        }
    }
}]);