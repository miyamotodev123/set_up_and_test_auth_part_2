(function() {
    angular.module('app')
        // injected 'growl' as a dependency to be used by the LoginController
        .controller('LoginController', ['$location', 'AuthService', 'growl',
            function($location, AuthService, growl) {
                var vm = this;

                vm.login = function() {
                    var login_data = {
                        email: vm.email,
                        password: vm.password
                    }
                
                    AuthService.login(login_data)
                        .success(function(response) {
                            console.log(response);
                            $location.path(response.redirect)
                        })
                        .error(function (error) {
                            console.log('failed login')
                            // add a growl error message
                            growl.addErrorMessage(error.error);
                        })
                }
            }])
})();
