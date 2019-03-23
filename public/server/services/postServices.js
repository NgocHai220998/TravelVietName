
var post = angular.module("post");
console.log(post);

post.factory('postSecvices', ['$http', function ($http) {
    return {
        getCookie: () => {
            return $http.get('/home/getCookie');
        },
        getUserMain : (email)=>{
            return $http.get('/home/getUserMain/' + email);
        }
    }
}]);