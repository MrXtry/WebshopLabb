/// <reference path="../angular.js" />

angular.module("webshopModule")
    .controller("MainController", [
        "$scope",
        "$route",
        "$location",
        function ($scope, $route, $location) {
            $scope.$route = $route;
            $scope.products = [];

            $scope.loadProducts = function () {
                var dataString = localStorage.getItem("products");
                if (dataString)
                    $scope.products = JSON.parse(dataString);
            }

            $scope.saveProducts = function () {
                var jsonString = JSON.stringify($scope.products);
                localStorage.setItem("products", jsonString);
            }

            $scope.go = function (url) {
                $location.path(url);
            }


            $scope.loadProducts();
        }
    ]);