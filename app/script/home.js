(function() {
    'use strict';

    angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/home', {
                templateUrl: '/view/home.html',
                controller: 'HomeCtrl'
            });
            $routeProvider.when('/', {
                templateUrl: '/view/home.html',
                controller: 'HomeCtrl'
            });
        }
    ])

    .controller('HomeCtrl', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {
        $scope.hideHeader=true;
        $timeout(function() {

        $scope.carouselItems = [];
        $scope.carouselItems = [
                {
                    title: 'LABEL_INIT_CAROUSEL_FIRST_TITLE',
                    message: 'LABEL_INIT_CAROUSEL_FIRST_MESSAGE'
                },
                {
                    title: 'LABEL_INIT_CAROUSEL_SECOND_TITLE',
                    message: 'LABEL_INIT_CAROUSEL_SECOND_MESSAGE'
                },
                {
                    title: 'LABEL_INIT_CAROUSEL_THIRD_TITLE',
                    message: 'LABEL_INIT_CAROUSEL_THIRD_MESSAGE'
                },
                {
                    title: 'LABEL_INIT_CAROUSEL_FOURTH_TITLE',
                    message: 'LABEL_INIT_CAROUSEL_FOURTH_MESSAGE'
                }
            ];

            $scope.dataLoaded = true;

        }, 5000);


        $scope.slickConfig = {
            enabled: true,
            centerMode: true,
            slidesToShow: 1,
            dots: true,
            autoPlay:true,
            autoPlaySpeed:3000,
            
        };
    }]);
}());
