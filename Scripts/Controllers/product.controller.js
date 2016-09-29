/// <reference path="../angular.js" />

angular.module("webshopModule")
    .controller("ProductController", [
        "$scope",
        "$routeParams",
        function ($scope, $routeParams) {
            $scope.title = "Product";
            
            $scope.product = $scope.products.filter(function (product) {
                return product.id == $routeParams.id;
            })[0];

            $scope.carouselImages = [];
            $scope.carouselImages.push($scope.product);

            console.log($scope.product);
            console.log($scope.carouselImages);
        }
    ]);