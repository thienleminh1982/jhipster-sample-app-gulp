'use strict';

angular.module('samplegulpApp')
    .controller('BankAccountController', function ($scope, $state, BankAccount) {

        $scope.bankAccounts = [];
        $scope.loadAll = function() {
            BankAccount.query(function(result) {
               $scope.bankAccounts = result;
            });
        };
        $scope.loadAll();


        $scope.refresh = function () {
            $scope.loadAll();
            $scope.clear();
        };

        $scope.clear = function () {
            $scope.bankAccount = {
                name: null,
                balance: null,
                id: null
            };
        };
    });
