var booking = angular.module("post-booking", []);

booking.controller('post-bookingController', ['$scope', 'bookingSecvices', async function ($scope, bookingSecvices){
    let url = window.location.pathname.split('/');
    
    $scope.bookings = [];
    $scope.posts = [];
    
    
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
        let postData = data.data.post;
        for(let i = 0; i < postData.length; i++){
            bookingSecvices.getBookingsOfPost(postData[i]._id).then((bookingDetail) => {
                console.log(bookingDetail);
                let aprroved = 0;
                let notAprroved = 0;
                for(let i = 0; i < bookingDetail.data.length; i++){
                    if(bookingDetail.data[i].approval == false){
                        notAprroved++;
                    }
                    else{
                        aprroved++;
                    }
                }
                let postTemp = {
                    post: postData[i],
                    numOfOrder: bookingDetail.data.length,
                    aprroved: aprroved,
                    notAprroved: notAprroved
                }
                
                $scope.posts.push(postTemp);
                console.log($scope.posts);
                //console.log(bookingDetail.data);
            })
        }
        //$scope.posts = data.data.post;
        //console.log(data.data);
    })
}])