/// <reference path="../angular.js" />

angular.module("webshopModule")
    .controller("MainController", [
        "$scope",
        "$route",
        "$location",
        function ($scope, $route, $location) {
            $scope.$route = $route;
            $scope.products = [];
            $scope.carts = [];

            $scope.loadProducts = function () {
                var dataString = localStorage.getItem("products");
                if (dataString)
                    $scope.products = JSON.parse(dataString);
            }

            $scope.saveProducts = function () {
                var jsonString = JSON.stringify($scope.products);
                localStorage.setItem("products", jsonString);
            }

            $scope.loadCarts = function () {
                var dataString = localStorage.getItem("carts");
                if (dataString)
                    $scope.carts = JSON.parse(dataString);
            }

            $scope.saveCarts = function () {
                var jsonString = JSON.stringify($scope.carts);
                localStorage.setItem("carts", jsonString);
            }

            $scope.go = function (url) {
                $location.path(url);
            }


            $scope.loadProducts();
            $scope.loadCarts();
        }
    ]);