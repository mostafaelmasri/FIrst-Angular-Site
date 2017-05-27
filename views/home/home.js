var app = angular.module("app")
.controller("homeCtrl", function($scope,$http){
    var config = {
        headers: {
            'X-Mashape-Key': 'FegzPmxDTNmshRkCPUq8PvhFRmBnp1SizPqjsndA10NlHquBkm'
        }
    };

    $scope.go = function () {
        $http.get("https://montanaflynn-spellcheck.p.mashape.com/check/?text=" + $scope.name, config).then(function (response) {
                $scope.data = response.data;
            }


        )
    };



}); 
