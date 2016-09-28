/// <reference path="../angular.js" />

angular.module("webshopModule")
    .controller("HomeController", [
        "$scope",
        function ($scope) {
            $scope.title = "Home";

        }
    ]);