(function() {
    'use strict';

    angular.module('myApp.careerMain', ['ngRoute'])

    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/career-main', {
                templateUrl: '/view/career-main.html',
                controller: 'CareerMainCtrl'
            });
        }
    ])

    .controller('CareerMainCtrl', ['$rootScope' ,'$scope', '$http','$timeout','$location','parallaxHelper','$window', function($rootScope,$scope, $http,$timeout,$location,parallaxHelper,$window) {
        $scope.init = function(){
            $rootScope.hideHeader=false;
            $rootScope.hidefooter=false;
            $scope.url = $location.absUrl().split('?')[1];
            if ($scope.url!=undefined) {
                $scope.url_id = $scope.url.split('=')[1];
            }else {
                $scope.url_id='featured';
            }

            $http.get('/script/career.json')
            .then(function(response) {
                $scope.eachJob=response.data;
                $scope.jobs=[];
                for(var i=0; i<$scope.eachJob.length; i++){
                    if($scope.eachJob[i]['Parent']==$scope.url_id){

                        $scope.jobs.push($scope.eachJob[i]);
                    }
                }

            }, function(response) {
                console.log('Error'+response);
            });
        };
        
        $scope.init();
    }]);
}());
