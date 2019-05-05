var book = angular.module("book");


book.factory('bookSecvices', ['$http', function ($http) {
    return {
        getCookie: () => {
            return $http.get("/home/getCookie");
        },
        getUserMain: email => {
            return $http.get("/home/getUserMain/" + email);
        },
        getPostById: _id => {
            return $http.get("/api/getDetailById/" + _id);
        },
        getHostPost: email => {
            return $http.get("/api/getUser/" + email);
        },
        bookPost: (postID, bookDetail) => {
            return $http.post("/book/" + postID, bookDetail)
        }
    }
}]);