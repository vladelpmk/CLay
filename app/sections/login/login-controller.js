define([
	'sections/login/login-factory'
], function (LoginFactory) {
    
	var LoginCtrl = function ($scope, $state, LoginFactory) {

		var init = function () {
			$scope.user = {
				username: '',
				password: ''
			};
		};
		init();

	};
	return ['$scope', '$state', 'LoginFactory', LoginCtrl];
});
