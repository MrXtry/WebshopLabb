/// <reference path="../angular.js" />

angular.module("webshopModule")
    .controller("HomeController", [
        "$scope",
        function ($scope) {
            $scope.title = "Home";

            $scope.carouselImages = $scope.products.slice(Math.max($scope.products.length - 3, 1));

        }
    ]);