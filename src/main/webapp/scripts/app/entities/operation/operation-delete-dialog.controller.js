'use strict';

angular.module('samplegulpApp')
	.controller('OperationDeleteController', function($scope, $uibModalInstance, entity, Operation) {

        $scope.operation = entity;
        $scope.clear = function() {
            $uibModalInstance.dismiss('cancel');
        };
        $scope.confirmDelete = function (id) {
            Operation.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        };

    });
