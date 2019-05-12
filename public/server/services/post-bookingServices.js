var post_booking = angular.module("post-booking");


post_booking.factory('bookingSecvices', ['$http', function ($http) {
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
        getBookingByUserID: () => {
            return $http.get("/getYoursBookings");
        },
        getBookingsOfPost: (postID) => {
            return $http.get("/getBookingsOfPost/" + postID)
        }
    }
}]);