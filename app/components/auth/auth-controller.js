define(['ng-storage'], function ($localStorage) {

	var AuthCtrl = function ($scope, $localStorage, $location, AuthFactory) {

        $scope.logOut = function(){
            AuthFactory.logOut().then(function(){
                $location.path('login');
            });
        }
        
		var init = function () {
			$scope.user = AuthFactory.getCurrentUser();
		};

		init();
	};
	return ['$scope', '$localStorage', '$location', 'AuthFactory', AuthCtrl];
});
