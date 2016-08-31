
var USWCApp = angular.module('USWCApp', [
  'ngRoute',
  'logonControllers'
]);

//***********************************************************************************

USWCApp.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/', {
            templateUrl: 'partials/logon.html',
            controller: 'logonCtrl'
        }).
         when('/UserRoute', {
             templateUrl: 'partials/userRoute.html',
             controller: 'userRouteCtrl'
         }).
          otherwise({
              templateUrl: 'partials/logon',
              controller: 'logonCtrl'
          });

  }]);


USWCApp.service('appSession', function (functions) {
    var users = [];
    

    this.addUser = function (user, pass) {
        var newUser = { username: user, password: pass, address: "" };
        var loc = functions.getIndex(user, users);
        if(loc == undefined){
            users.push(newUser);
            return true;
        } else {
            return false;
        }
    }

    this.addAddress = function (user, newAddress) {
        
    }

});

USWCApp.service('functions', function () {
    
    this.getIndex = function (user, users) {

        for(var i=0; i< users.length; i++){
            if (users[i].username == user) {
                return i;
            }
        }
    }
});

USWCApp.service('validate', function (appSession) {

    //send to server here for validation, lets assume validation came back valid.
    this.validateLogon = function (user, pass) {
        appSession.addUser(user, pass);
    }

    this.newUser = function (user, pass) {
       return  appSession.addUser(user, pass);
    }
});