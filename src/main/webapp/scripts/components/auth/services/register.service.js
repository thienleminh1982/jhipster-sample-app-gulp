'use strict';

angular.module('sampleGulpApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


