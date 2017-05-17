(function() {
    'use strict';

    angular.module('myApp.animate', ['ngRoute'])

    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/animate', {
                templateUrl: '/view/animate.html',
                controller: 'animateCtrl'
            });
        }
    ])

    .controller('animateCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.hideHeader=true;
    }]);
}());