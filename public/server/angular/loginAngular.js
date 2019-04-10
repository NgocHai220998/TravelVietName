

var login = angular.module('login', []);

login.controller('LoginController', ['$scope', 'loginServices', '$window', function ($scope, loginServices, $window) {

    /**
     * Set default value for Login
     */
    $scope.isSignup = false;
    $scope.isLogin = false;
    $scope.title = "Login";
    $scope.listUsers; // danh sách users trong db
    /**
     * Login
     */
    $scope.emailLogin = document.getElementById('email-login-text');
    $scope.passLogin = document.getElementById('password-login-text');

    //End Login

    /**
    * Signup
    */
    $scope.fullnameSignup = document.getElementById('fullname-signup-text');
    $scope.emailSignup = document.getElementById('email-signup-text');
    $scope.passSignup = document.getElementById('password-signup-text');
    $scope.rePassSignup = document.getElementById('rePassword-signup-text');
    //End Login


    // End set default value for Login




    $scope.toSignup = function () { // hidden form login -> show form signup
        document.getElementsByClassName('container__login')[0].classList.add('notDisplay');
        document.getElementsByClassName('container__signup')[0].classList.remove('notDisplay');
        $scope.title = "Signup";
    }
    $scope.toLogin = function () { // hidden form signup -> show form login
        document.getElementsByClassName('container__login')[0].classList.remove('notDisplay');
        document.getElementsByClassName('container__signup')[0].classList.add('notDisplay');
        $scope.title = "Login";
    }

    $scope.clickBtnLogin = function () {// click button login 
        loginServices.getUsers().then((users) => {
            $scope.listUsers = users.data;
            let lengthUsers = $scope.listUsers.length;

            for (let i = 0; i < lengthUsers; ++i) {
                if ($scope.emailLogin.value === $scope.listUsers[i].email) {
                    i = lengthUsers + 1998;
                    document.getElementsByClassName('container__login__email')[0].classList.remove('failEmailLogin');
                    if ($scope.passLogin.value !== "") {
                        let info = {
                            email: $scope.emailLogin.value,
                            password: $scope.passLogin.value
                        }
                        loginServices.checkLogin(info).then((result) => {
                            if (parseInt(result.data)) {
                                document.getElementsByClassName('container__login__password')[0].classList.remove('failPasswordLogin');
                                $scope.isLogin = true;
                                document.getElementById('btn-login').setAttribute('type', 'submit');
                            } else {
                                document.getElementsByClassName('container__login__password')[0].classList.add('failPasswordLogin');
                                $scope.isLogin = false;
                                document.getElementById('btn-login').setAttribute('type', 'button');
                            }
                        });
                    }
                } else {
                    if($scope.emailLogin.value.length > 0){
                        document.getElementsByClassName('container__login__email')[0].classList.add('failEmailLogin');
                    }
                }
            }


        });
    }

    $scope.checkInfoSignup = function () {

        loginServices.getUsers().then((users) => {
            $scope.listUsers = users.data;
            let lengthUsers = $scope.listUsers.length;
            let isEmail = true; // check email 
            let isPassword = true; // check password

            for (let i = 0; i < lengthUsers; ++i) {
                if ($scope.emailSignup.value === $scope.listUsers[i].email) {
                    document.getElementsByClassName('container__signup__email')[0].classList.add('failEmailSignup');
                    document.getElementsByClassName('container__signup__email')[0].setAttribute('messWarning', 'Email đã tồn tại!');
                    isEmail = false;
                    break;
                } else {
                    document.getElementsByClassName('container__signup__email')[0].classList.remove('failEmailSignup');
                    isEmail = true;
                }
            }

            if ($scope.emailSignup.value === "" && isEmail === true) {
                document.getElementsByClassName('container__signup__email')[0].classList.add('failEmailSignup');
                document.getElementsByClassName('container__signup__email')[0].setAttribute('messWarning', 'Email không được bỏ trống!');
            } else if ($scope.emailSignup.value === "") {
                document.getElementsByClassName('container__signup__email')[0].classList.remove('failEmailSignup');
            }


            if ($scope.passSignup.value.length < 6 && $scope.passSignup.value.length > 0) {
                document.getElementsByClassName('container__signup__password')[0].classList.add('warningPassword');
                isPassword = false;
            } else {
                isPassword = true;
                document.getElementsByClassName('container__signup__password')[0].classList.remove('warningPassword');
            }

            if ($scope.passSignup.value !== $scope.rePassSignup.value || $scope.passSignup.value.length < 6) {
                if ($scope.rePassSignup.value > 0 && $scope.passSignup.value !== $scope.rePassSignup.value) {
                    document.getElementsByClassName('container__signup__rePassword')[0].classList.add('failPasswordSignup');
                    isPassword = false;
                } else {

                    document.getElementsByClassName('container__signup__rePassword')[0].classList.remove('failPasswordSignup');
                }
            } else {
                isPassword = true;
                document.getElementsByClassName('container__signup__rePassword')[0].classList.remove('failPasswordSignup');
            }

            if (isPassword && isEmail) {
                $scope.isSignup = true;
                document.getElementById('btn-signup').setAttribute('type', 'submit');
            } else {
                $scope.isSignup = false;
                document.getElementById('btn-signup').setAttribute('type', 'button');
            }
        });
    }


    $scope.failSignup = function () {
        //do something
    }




}]);    