(function() {
    angular.module('app')
        .factory('AuthService', ['$http',
            function($http) {
                var AuthService = {};

                AuthService.login = function(data) {
                    return $http.post('/login', data)
                }

                return AuthService;
            }])
})();