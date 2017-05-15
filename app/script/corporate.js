(function() {
    'use strict';

    angular.module('myApp.corporate', ['ngRoute'])

    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/corporate', {
                templateUrl: '/view/corporate.html',
                controller: 'CorporateCtrl'
            });
        }
    ])

    .controller('CorporateCtrl', ['$scope', '$http', function($scope, $http) {

    }]);
}());
