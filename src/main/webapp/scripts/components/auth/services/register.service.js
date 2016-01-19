'use strict';

angular.module('samplegulpApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


