'use strict';

angular.module('sampleGulpApp')
    .factory('errorHandlerInterceptor', function ($q, $rootScope) {
        return {
            'responseError': function (response) {
                if (!(response.status == 401 && response.data.path.indexOf("/api/account") == 0 )){
	                $rootScope.$emit('sampleGulpApp.httpError', response);
	            }
                return $q.reject(response);
            }
        };
    });