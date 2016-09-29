/// <reference path="../angular.js" />

angular.module("webshopModule")
    .controller("CartController", [
        "$scope",
        function ($scope) {
            $scope.title = "Cart";

            $scope.removeCart = function (index) {
                $scope.carts.splice(index, 1);
                
                $scope.saveCarts();
            }
        }
    ]);