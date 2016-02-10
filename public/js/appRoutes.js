// defining our routes
(function() {
    angular.module('app') 
        .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: '/views/landing.html',
                })
                .when('/login', {
                    templateUrl: '/views/login.html',
                })
                .when('/signup', {
                    templateUrl: '/views/signup.html'
                })
                .when('/profile', {
                    templateUrl: '/views/profile.html',
                    controller: 'ProfileController'
                }) 
                .otherwise({
                    redirectTo: '/'
                });

              // use the HTML5 History API
              $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
              });
        }]);
})();