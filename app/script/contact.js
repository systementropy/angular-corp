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
            //  
            $scope.shape = {
              coords: [1, 1, 1, 20, 18, 20, 18 , 1],
              type: 'poly'
            };
            $scope.addArr =[
                {'id':"id16",'add':"[19.001350, 72.827896]",'type':'head','fullAdd':"First Floor, Empire Complex, 414 Senapati Bapat Marg, Lower Parel, Mumbai-400013, Maharashtra"},
                {'id':"id1",'add':"[23.058743, 72.519914]",'type':'bureau','fullAdd':"201,sarthik 2nd opp.Rajpath club, S.G.Road, Ahmedabad"},
                {'id':"id2",'add':"[12.983192, 77.624750]",'type':'bureau','fullAdd':"Millenia Tower, Tower - C, Murphy Road, 6th Floor, Ulsoor, Bangalore - 560008"},
                {'id':"id3",'add':"[23.224792, 77.436064]",'type':'bureau','fullAdd':"Mb-4, Mezzanine Mansarover Complex, Opp. BJP Office, Bhopal"},
                {'id':"id4",'add':"[20.281471, 85.851227]",'type':'bureau','fullAdd':"Room no. 204, Hotel Sungreen, Punjab colony square, In front of puja mandap, Satyanagar, Bhubaneswar - 751007 Orissa"},
                {'id':"id5",'add':"[28.567833, 77.315451]",'type':'head','fullAdd':"TV18 Broadcast Limited, Express Trade Tower, Plot No. 15 & 16, Sector 16A, Film City, Noida, Uttar Pradesh 201301"},
                {'id':"id6",'add':"[13.043239, 80.271036]",'type':'bureau','fullAdd':"No.2,p.s.sivaswamy salai,2nd street,mylapore,-chennai-600004"},
                {'id':"id7",'add':"[26.191511, 91.750849] ",'type':'bureau','fullAdd':"Hotel brahmputra ahsok, m.g. road, guwahati"},
                {'id':"id8",'add':"[17.425781, 78.456847]",'type':'bureau','fullAdd':"D/no: 6-3-902/a, 4th floor, plot no : 9, central plaza, rajbhavan road, somajiguda, hyderabad - 500082."},
                {'id':"id9",'add':"[26.914418, 75.803349]",'type':'bureau','fullAdd':"502 whispering palms apartment, d-42, subhahs marg, c - sheme, jaipur"},
                {'id':"id10",'add':"[32.704639, 74.860833]",'type':'bureau','fullAdd':"Ist Floor,7 B/C Gandhi Nagar near shorya Motors Jammu"},
                {'id':"id11",'add':"[22.547301, 88.354367]",'type':'bureau','fullAdd':"10, wood street, 4th floor, kolkatta - 700017 (west bangal)"},
                {'id':"id12",'add':"[26.857102, 81.002106]",'type':'bureau','fullAdd':"3/170, Vinay Khand, Vidhayak Puram, Gomti Nagar, Lucknow-226010"},
                {'id':"id13",'add':"[25.612444, 85.114386]",'type':'bureau','fullAdd':"184-B, Srikrishnapuri,-Patna-800001 Bihar"},
                {'id':"id14",'add':"[34.073015, 74.815925]",'type':'bureau','fullAdd':"R.N-214&215,Hotal Pamposh Residency Road,Regal Chowk Srinagar-190001"},
                {'id':"id15",'add':"[30.752350, 76.775792]",'type':'bureau','fullAdd':"House no.1284, Sector 15-B, UT Chandigarh"},
                {'id':"id17",'add':"[8.499312, 76.957888]",'type':'bureau','fullAdd':"Space no. 2, third floor, trans tower vazhuthacaud, thiruvananthapuram"},
                
            ];

            $rootScope.hideHeader=false;
            $rootScope.hidefooter=false;
        };
        
        $scope.init();
    }]);
}());
