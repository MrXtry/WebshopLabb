/// <reference path="../angular.js" />

angular.module("webshopModule")
    .controller("HomeController", [
        "$scope",
        function ($scope) {
            $scope.title = "Home";
            $scope.carouselunit = false;

            if ($scope.products.length <= 3) {
                $scope.carouselImages = $scope.products;
            }
            else {
                $scope.carouselImages = $scope.products.slice(Math.max($scope.products.length - 3, 1));
            }
          
            if ($scope.carouselImages[0] != undefined) {
                $scope.carouselunit = true;
            }

        }
    ]);