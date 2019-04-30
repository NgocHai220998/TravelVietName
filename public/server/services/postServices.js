var post = angular.module("post");
console.log(post);

post.factory("postSecvices", [
  "$http",
  function($http) {
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
      sendReport: (id, userComment) => {
        return $http.put("/api/addComment/" + id, userComment);
      }
    };
  }
]);
