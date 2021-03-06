'use strict';

angular.module('myreservationappApp')
    .controller('MainController', function ($scope, Principal, RestaurantMore) {
        $scope.restaurants = {};
        $scope.restaurants_type = 'restaurants';

        $scope.changeRestaurantType = function(data){
            $scope.restaurants_type = data;
            $scope.loadAll();
        };

        $scope.loadAll = function(){
            if ($scope.restaurants_type === 'restaurants') {
                $scope.restaurants = {};
                RestaurantMore.getAllRestaurants()
                    .success(function (restaurants) {
                        $scope.restaurants = restaurants;
                    })
                    .error(function () {
                        console.log('ERROR: Restaurants');
                    })
            }
            if ($scope.restaurants_type === 'pubs') {
                $scope.restaurants = {};
                RestaurantMore.getAllPubs()
                    .success(function (restaurants) {
                        $scope.restaurants = restaurants;
                    })
                    .error(function () {
                        console.log('Nu a mers :(');
                    })
            }
            if ($scope.restaurants_type === 'clubs') {
                $scope.restaurants = {};
                RestaurantMore.getAllClubs()
                    .success(function (restaurants) {
                        $scope.restaurants = restaurants;
                    })
                    .error(function () {
                        console.log('Nu a mers :(');
                    })
            }
        };

        Principal.identity().then(function(account) {
            $scope.account = account;
            $scope.isAuthenticated = Principal.isAuthenticated;

            if($scope.isAuthenticated()) {
                $scope.loadAll();
            }


        });



    });
