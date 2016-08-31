 

    var logonControllers = angular.module('logonControllers', []);




//***********************************************************************************

    logonControllers.controller('logonCtrl', function ($scope, $http, appSession, validate) {

    $scope.init = function () {

    }

    //***********************************************************************************

    $scope.signUp = function () {

        $scope.loading = true;
        $scope.error = "";
        var user = $scope.username;
        var pass = $scope.password;

        if (user != "" && pass != "") {


            
            if (validate.newUser(user, pass)) {
                document.getElementById("loggedOnUser").innerHTML = "Hi "+ user;
                $scope.changeRoute('#/UserRoute');
            } else {
                $scope.errorMsg = "Username exists, please login or try another";
            }

        }

        $scope.loading = false;
        $scope.$apply()
    }
    //***********************************************************************************

    $scope.validate = function () {
        
        $scope.loading = true;
        $scope.error = "";
        var user = $scope.username;
        var pass = $scope.password;

        if (user != "" && pass != "") {

            if (validate.validateLogon(user, pass)) {
                $scope.changeRoute('#/UserRoute');
            } else {
                $scope.error = "Invalid Username or Password";
            }
        }
            $scope.loading = false;
            $scope.$apply()
        
    }


    //***********************************************************************************

    $scope.changeRoute = function (url, forceReload) {
        $scope = $scope || angular.element(document).scope();
        if (forceReload || $scope.$$phase) { 
            window.location = url;
        } else {
            window.location = url;
            $scope.$apply();
            $scope.loading = false;
        }
    };

    //***********************************************************************************

});


