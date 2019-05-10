var booking = angular.module("post-booking", []);

booking.controller('post-bookingController', ['$scope', 'bookingSecvices', async function ($scope, bookingSecvices){
    let url = window.location.pathname.split('/');
    
    $scope.bookings = [];
    $scope.posts = {};
    
    
    bookingSecvices.getBookingByUserID().then((data) => {
        let bookingData = data.data.booking;
        for(let i = 0; i < bookingData.length; i++){
            bookingSecvices.getPostById(bookingData[i].postID).then((postDetail) => {
                let bookingTemp = {
                    booking: bookingData[i],
                    postDetail: postDetail.data
                }
                $scope.bookings.push(bookingTemp);
            })
        }
        $scope.posts = data.data.post;
        console.log(data.data);
    })
}])