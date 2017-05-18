(function() {
    'use strict';

    angular.module('myApp.headerCtrl', ['ngRoute'])

    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/header', {
                templateUrl: '/view/header.html',
                controller: 'headerCtrl'
            });
        }
    ])

    .controller('headerCtrl', ['$rootscope','$scope', '$http', function($rootscope,$scope, $http) {
        $scope.hideHeader = true;
    }]);
}());