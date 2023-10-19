//declares this module as a variable to be used by the html view
let app = angular.module('app', ['ngRoute']).config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/home', {
            templateUrl: 'view/home.html'
        })
        //because the appController is specified here, it does not need to be added to the div tag in the directory.html view, div ng-controller is no longer needed
        .when('/directory', {
            templateUrl: 'view/directory.html',
            controller: 'appController'
        })
        .otherwise({
            redirectTo: '/home'
        })
    }]);

//everything below is contained in this module and allows for the program to be broken up into logical chunks

//runs before the application runs --> can add additional options (ie: routing)
//any code that acts as preparation before the application is run
//app().


//runs as the application runs
// app.run(function(){

// });


//declares a controller
//$scope is required to bind to the html view and allow it to use the controller to pass data
//is a dependency so it needs to be passed into the function to be used within the controller
//the [] before function will hold the dependencies so that when/if the application is minified, it will still work 
//array of dependencies with function typically being the last one --> not super necessary but is BEST PRACTICE
app.controller('appController', ['$scope' , function($scope){

    //will only be recognized and will only be usable within the html tag that is using the controller
    //this is the div tag in the index.html
    


    $scope.removeUser = function(user){
        let removedUser  = $scope.users.indexOf(user);
        $scope.users.splice(removedUser, 1);
    };

    $scope.addUser = function(){
        $scope.users.push({
            name: $scope.newUser.name,
            shirtColor: $scope.newUser.shirtColor,
            rate: parseInt($scope.newUser.rate),
            available: true
        });

        $scope.newUser.name = "";
        $scope.newUser.shirtColor = "";
        $scope.newUser.rate = "";
    };

    console.log(angular.toJson($scope.users));

}]);

