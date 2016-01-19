 'use strict';

angular.module('samplegulpApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-samplegulpApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-samplegulpApp-params')});
                }
                return response;
            }
        };
    });
