(function() {
    'use strict';

    angular.module('myApp.corporate-main', ['ngRoute'])

    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/corporate-main', {
                templateUrl: '/view/corporate-main.html',
                controller: 'CorporateMainCtrl'
            });
        }
    ])

    .controller('CorporateMainCtrl', ['$scope', '$http', function($scope, $http) {

    }]);
}());
