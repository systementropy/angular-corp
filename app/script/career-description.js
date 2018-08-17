(function() {
    'use strict';

    angular.module('myApp.careerDescription', ['ngRoute'])

    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/career-description', {
                templateUrl: '/view/career-description.html',
                controller: 'jobDescCtrl'
            });
        }
    ])

    .controller('jobDescCtrl', 
        ['$rootScope' ,'$scope', '$http','$timeout','$location','parallaxHelper','$window', 
        function($rootScope,$scope, $http,$timeout,$location,parallaxHelper,$window) {
            $scope.init = function(){
                $scope.url = $location.absUrl().split('?');
                console.log($scope.url);
                // if ($scope.url!=undefined) {
                //     $scope.url_id = $scope.url.split('=')[1];
                //     $scope.getCityDetails($scope.url_id);
                // }else {
                //     $scope.url_id='featured';
                // }
                $http.get('/script/career.json')
                .then(function(response) {

                }, function(response) {
                    console.log('Error'+response);
                });
                $rootScope.hideHeader=false;
                $rootScope.hidefooter=false;
            };
            
            $scope.init();
    }]);
}());
