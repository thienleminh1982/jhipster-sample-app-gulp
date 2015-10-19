 'use strict';

angular.module('sampleGulpApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-sampleGulpApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-sampleGulpApp-params')});
                }
                return response;
            }
        };
    });
