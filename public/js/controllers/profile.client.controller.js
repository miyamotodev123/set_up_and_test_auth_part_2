(function() {
    angular.module('app')
        .controller('ProfileController', ['$http', '$scope', '$location', 
            function($http, $scope, $location) {
                $http.get('/api/userData')
                    .success(function(response) {
                        console.log('user data success')
                        console.log(response)
                        $scope.user = response; //Expose the user data to your angular scope
                    })
                    .error(function(error) {
                        console.log('error user data error')
                        console.log(error)
                        $location.path(error.redirect);
                    });
            }])
})();