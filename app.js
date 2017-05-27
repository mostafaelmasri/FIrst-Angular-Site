var app = angular.module("app", ['ngRoute'])

//app.controller("ctrl", function ($scope, $http) {

//    var config = {
//        headers: {
//            'X-Mashape-Key': 'FegzPmxDTNmshRkCPUq8PvhFRmBnp1SizPqjsndA10NlHquBkm'
//        }
//    };
//
//    $scope.go = function () {
//        $http.get("https://montanaflynn-spellcheck.p.mashape.com/check/?text=" + $scope.name, config).then(function (response) {
//                $scope.data = response.data;
//            }
//
//
//        )
//    };
//
//
//
//});



app.directive('myNav', function () {
    return {
        templateUrl: './navbar.html',
        restrict: 'E',
        link: function (scope, element, attr) {
            scope.changeColor = function () {
                var colors = ['#e4abab ', 'black', '#abdde4 ', '#abe4ac ', '#e4cfab '];
                var index = Math.floor(Math.random() * colors.length);
                document.querySelector('nav').style.backgroundColor = colors[index];
            }

        }

    }
});

//
//aconfig(function ($routeProvider) {
//  $routeProvider
//      .when("/home", {
//    controller: 'homeController',
//    templateUrl: 'components/home/home.html'
//  })
// .when('/about', {
//      controller:'aboutController',
//      templateUrl: 'components/about/about.html'
//  })    
//})



app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            controller: 'homeCtrl',
            templateUrl: 'views/home/home.html'
        })
    
    .when('/about', {
        controller: 'aboutController',
        templateUrl: 'views/about/about.html'
    })
    .when('/contact', {
        controller: 'contactController',
        templateUrl: 'views/contact/contact.html'
    })
    
    .otherwise({
        redirectTo: '/'
    })
});
