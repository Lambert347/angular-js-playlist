//declares this module as a variable to be used by the html view
var app = angular.module('app', []);

//everything below is contained in this module and allows for the program to be broken up into logical chunks

//runs before the application runs --> can add additional options (ie: routing)
//any code that acts as preparation before the application is run
// app().config(function(){


// });

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
        shirtColor: 'blue',
        rate: 50
    },
    {
        name: 'Jorge',
        shirtColor: 'green',
        rate: 500
    },
    {
        name: 'Patricia',
        shirtColor: 'burgundy',
        rate: 500000
    },
    {
        name: 'Francesca',
        shirtColor: 'white',
        rate: 1
    }
    ];
}]);

