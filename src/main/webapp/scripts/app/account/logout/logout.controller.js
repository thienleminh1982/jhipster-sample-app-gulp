'use strict';

angular.module('samplegulpApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
