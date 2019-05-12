var approveBooking = angular.module("approveBooking", []);

approveBooking.controller('approveBookingController', ['$scope', 'approveBookingSecvices', async function ($scope, approveBookingSecvices){
    let url = window.location.pathname.split('/');

    $scope.approvedBookings = [];
    $scope.notApprovedBookings = []

    approveBookingSecvices.getPostById(url[2]).then((postDetail) => {
        $scope.postDetail = postDetail.data
        // console.log(postDetail.data);
    })

    approveBookingSecvices.getBookingsOfPost(url[2]).then((bookings) => {
        for(let i = 0; i < bookings.data.length; i++){
            if(bookings.data[i].approval == false){
                approveBookingSecvices.getHostPost(bookings.data[i].guestEmail).then((hostPost) => {
                    $scope.notApprovedBookings.push({
                        hostPost: hostPost.data,
                        booking: bookings.data[i]
                    })
                })
            }else{
                approveBookingSecvices.getHostPost(bookings.data[i].guestEmail).then((hostPost) => {
                    $scope.approvedBookings.push({
                        hostPost: hostPost.data,
                        booking: bookings.data[i]
                    })
                })
            }
            
        }
        console.log($scope.approvedBookings)
    })

    $scope.approveBooking = function (bookingID) {
        let booking = {
            bookingID: bookingID
        }
        approveBookingSecvices.approveBooking(booking).then((data) => {
            console.log(data)
        })
        location.reload();
    }
}])