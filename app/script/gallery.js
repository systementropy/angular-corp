(function() {
    'use strict';

    angular.module('myApp.gallery', ['ngRoute'])

    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/gallery', {
                templateUrl: '/view/gallery.html',
                controller: 'galleryCtrl'
            });
        }
    ])

    .controller('galleryCtrl', ['$rootScope' ,'$scope', '$http','$timeout','$location','parallaxHelper','$window', function($rootScope,$scope, $http,$timeout,$location,parallaxHelper,$window) {
        $scope.updateGallery = function(index) {
            if (index===0) {
                $scope.showGaly=false;
                $scope.showGal1=false;
                $scope.showGal2=false;
                $scope.showGal3=false;
                $scope.showGal4=false;
                $scope.showGal5=false;
                $scope.showGal6=false;
                $scope.showGal7=false;
                $scope.showGal8=false;
                $scope.showGal9=false;
                $scope.showGal10=false;
                $scope.showGal11=false;
                $scope.showGal12=false;
            }else{
                $scope.showGaly=true;
                if (index==1) {
                    $scope.showGal1=true;
                }else if (index==2) {
                    $scope.showGal2=true;
                }else if (index==3) {
                    $scope.showGal3=true;
                }else if (index==4) {
                    $scope.showGal4=true;
                }else if (index==5) {
                    $scope.showGal5=true;
                }else if (index==6) {
                    $scope.showGal6=true;
                }else if (index==7) {
                    $scope.showGal7=true;
                }else if (index==8) {
                    $scope.showGal8=true;
                }else if (index==9) {
                    $scope.showGal9=true;
                }else if (index==10) {
                    $scope.showGal10=true;
                }else if (index==11) {
                    $scope.showGal11=true;
                }else if (index==12) {
                    $scope.showGal12=true;
                }
            }
        };
        $scope.init = function(){
            $window.document.title='NETWORK18 | Gallery';
            $scope.showGaly =false;
            $rootScope.hideHeader=false;
            $scope.background = parallaxHelper.createAnimator(-0.5, 0, 100);
            $scope.foreground = parallaxHelper.createAnimator(0.7, 3000, -1500);
            $rootScope.hidefooter=false;
        };
        
        $scope.init();
    }]);
}());
/*
!function () {
    "use strict";
    angular.module("myApp.gallery", ["ngRoute"]).config(["$routeProvider", function (l) {
        l.when("/gallery", {templateUrl: "/view/gallery.html", controller: "galleryCtrl"})
    }]).controller("galleryCtrl", ["$rootScope", "$scope", "$http", "$timeout", "$location", "parallaxHelper", "$window", function (l, o, a, e, t, r, h) {
        o.updateGallery = function (l) {
            0 === l ? (o.showGaly = !1, o.showGal1 = !1, o.showGal2 = !1, o.showGal3 = !1, o.showGal4 = !1, o.showGal5 = !1, o.showGal6 = !1, o.showGal7 = !1, o.showGal8 = !1, o.showGal9 = !1,  o.showGal10 = !1,  o.showGal11 = !1)
                : (o.showGaly = !0, 1 == l ? o.showGal1 = !0
                : 2 == l ? o.showGal2 = !0
                    : 3 == l ? o.showGal3 = !0
                        : 4 == l ? o.showGal4 = !0
                            : 5 == l ? o.showGal5 = !0
                                : 6 == l ? o.showGal6 = !0
                                    : 7 == l ? o.showGal7 = !0
                                        : 8 == l ? o.showGal8 = !0
                                            : 10 == l ? o.showGal10 = !0
                                                : 11 == l ? o.showGal11 = !0
                                                    : 9 == l && (o.showGal9 = !0))
        }, o.init = function () {
            h.document.title = "NETWORK18 | Gallery", o.showGaly = !1, l.hideHeader = !1, o.background = r.createAnimator(-.5, 0, 100), o.foreground = r.createAnimator(.7, 3e3, -1500), l.hidefooter = !1
        }, o.init()
    }])
}();
*/