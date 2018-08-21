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
                    for(var i=0; i<$scope.eachJob.length; i++){
                        if($scope.eachJob[i]['id']==$scope.url_id){
                            $scope.jobData=$scope.eachJob[i];
                            break;
                        }
                    }

                }, function(response) {
                    console.log('Error'+response);
                });
                
            };
            
            $scope.init();
    }]);
}());
