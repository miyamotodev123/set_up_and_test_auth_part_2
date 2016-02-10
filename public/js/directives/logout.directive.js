(function(){
    angular.module('app')
        .directive('logout', ['$http', function($http) {
            return {
                restrict: 'A',
                link: function(scope, element, attrs) {
                    element.on('click', function(e) {
                        $http.post('/logout');
                    });
                }
            }
        }]);
})();