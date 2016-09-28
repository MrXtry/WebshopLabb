/// <reference path="../angular.js" />

angular.module("webshopModule")
    .controller("ProductsController", [
        "$scope",
        function ($scope) {
            $scope.title = "Prodcuts";

        }
    ]);