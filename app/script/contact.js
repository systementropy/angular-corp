(function() {
    'use strict';

    angular.module('myApp.contact', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/contact', {
            templateUrl: '/view/contact.html',
            controller: 'ContactCtrl'
        });
    }])

    .controller('ContactCtrl', ['$rootScope' ,'$scope', '$http','$timeout','$location','NgMap', function($rootScope,$scope, $http,$timeout,$location,NgMap) {
        
        $scope.init = function(){
            // NgMap.getMap().then(function(map) {
            //     console.log(map.getCenter());
            //     console.log('markers', map.markers);
            //     console.log('shapes', map.shapes);
            // });
            $scope.shape = {
              coords: [1, 1, 1, 20, 18, 20, 18 , 1],
              type: 'poly'
            };
            $scope.addArr =[
                {'id':"id1",'add':"201,sarthik 2nd Ahmedabad",'type':'bureau'},
                {'id':"id2",'add':"Millenia Tower, Tower - C, Bangalore - 560008",'type':'bureau'},
                {'id':"id3",'add':"Mb-4, Mezzanine Mansarover Complex, Bhopal",'type':'bureau'},
                {'id':"id4",'add':"Room no. 204, Hotel Sungreen, Orissa",'type':'bureau'},
                {'id':"id5",'add':"House no.1284,UT Chandigarh",'type':'head'},
                {'id':"id6",'add':"No.2,p.s.sivaswamy salai,2nd street,mylapore,-chennai-600004",'type':'bureau'},
                {'id':"id7",'add':"Hotel brahmputra ahsok, m.g. road, guwahati ",'type':'bureau'},
                {'id':"id8",'add':"D/no: 6-3-902/a, 4th floor, plot no : 9, central plaza, rajbhavan road, somajiguda, hyderabad - 500082.",'type':'bureau'},
                {'id':"id9",'add':"502 whispering palms apartment, d-42, subhahs marg, c - sheme, jaipur",'type':'bureau'},
                {'id':"id10",'add':"Ist Floor,7 B/C Gandhi Nagar near shorya Motors Jammu",'type':'bureau'},
                {'id':"id11",'add':"10, wood street, 4th floor, kolkatta - 700017 (west bangal)",'type':'bureau'},
                {'id':"id12",'add':"3/170, Vinay Khand, Vidhayak Puram, Gomti Nagar, Lucknow-226010",'type':'bureau'},
                {'id':"id13",'add':"184-B, Srikrishnapuri,-Patna-800001 Bihar",'type':'bureau'},
                {'id':"id14",'add':"R.N-214&amp;215,Hotal Pamposh Residency Road,Regal Chowk Srinagar-190001",'type':'bureau'},
                {'id':"id15",'add':"Space no. 2, third floor, trans tower vazhuthacaud, thiruvananthapuram",'type':'bureau'}
            ];

            $rootScope.hideHeader=false;
        };
        
        $scope.init();
    }]);
}());
