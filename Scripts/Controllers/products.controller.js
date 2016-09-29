/// <reference path="../angular.js" />

angular.module("webshopModule")
    .controller("ProductsController", [
        "$scope",
        function ($scope) {
            $scope.title = "Prodcuts";
            $scope.newProduct = {
                name: "",
                description: "",
                content: "",
                image: {}
            };
            var newCart = {};

            $scope.addProduct = function () {
                if ($scope.products.length == 0)
                    $scope.newProduct.id = 1;
                else
                    $scope.newProduct.id = $scope.products[$scope.products.length - 1].id + 1;

                if ($scope.newProduct.image.url == undefined) {
                    $scope.newProduct.image = {
                        url: "http://placehold.it/150x80",
                        alt: "Image"
                    }
                }
                else{
                    $scope.newProduct.image = {
                        url: $scope.newProduct.image.url,
                        alt: "Image"
                    }
                }
                
                $scope.products.push($scope.newProduct);
                $scope.newProduct = {};
                $scope.newProduct.image = {};

                $scope.saveProducts();
            }

            $scope.addCart = function (index) {
                newCart = $scope.products[index];
                console.log(newCart);
                $scope.carts.push(newCart);
                newCart = {};

                $scope.saveCarts();
            }

            $scope.removeProduct = function (index) {
                $scope.products.splice(index, 1);
                
                $scope.saveProducts();
            }
        }
    ]);