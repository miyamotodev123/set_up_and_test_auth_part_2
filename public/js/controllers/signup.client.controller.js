(function() {
    angular.module('app')
        .controller('SignupController', ['$http', '$location', 'growl',
            function($http, $location, growl) {
                var vm = this;
                vm.signup = function() {
                    $http
                        .post('/signup', {
                            email: vm.email,
                            password: vm.password
                        })
                        .success(function(response) {
                            console.log(response);
                            $location.path(response.redirect)
                        })
                        .error(function(error) {
                            growl.addErrorMessage(error.error);
                        })
                }
            }])
})();