

//***********************************************************************************

var userRouteControllers = angular.module('userRouteControllers', []);


userRouteControllers.controller('userRouteCtrl', function ($scope) {


    //***********************************************************************************

    //***********************************************************************************

    $scope.dashboard = function () {

        $scope.changeRoute('#/');
    }

    //***********************************************************************************

    $scope.accountInfo = function () {

        $scope.changeRoute('#/');
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



