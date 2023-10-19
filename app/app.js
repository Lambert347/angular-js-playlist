//declares this module as a variable to be used by the html view
let app = angular.module('app', ['ngRoute']);

//everything below is contained in this module and allows for the program to be broken up into logical chunks

//runs before the application runs --> can add additional options (ie: routing)
//any code that acts as preparation before the application is run
app().config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/home', {
            templateUrl: 'view/home.html'
        })
        .when('/directory', {
            templateUrl: 'view/directory.html',
            controller: 'appController'
        })
        .otherwise({
            redirectTo: '/home'
        })
}])

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
    $scope.users = [
    {
        name: 'Algernon',
        shirtColor: 'yellow',
        rate: 50,
        available: true,
        thumb: "content/img/yoshi.png"
    },
    {
        name: 'Jorge',
        shirtColor: 'green',
        rate: 500,
        available: false,
        thumb: "content/img/crystal.png"
    },
    {
        name: 'Patricia',
        shirtColor: 'red',
        rate: 500000,
        available: true,
        thumb: "content/img/ryu.png"
    },
    {
        name: 'Francesca',
        shirtColor: 'white',
        rate: 1,
        available: false,
        thumb: "content/img/shaun.png"
    }
    ];


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

}]);

