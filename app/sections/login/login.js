define([
	'angular',
	'sections/login/login-controller',
	'sections/login/login-factory',
], function(angular, LoginCtrl, LoginFactory) {

	var clayLogin = angular.module('clayLogin', []);

	clayLogin.config(['$stateProvider', '$urlRouterProvider', 
		function($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state('app.login', {
					url: "/login",
					views: {
						'master': {
							templateUrl: 'sections/login/login.html',
							controller: 'LoginCtrl'
						}
					},
					data: {
						authreq: false
					}
				});
	}]);
    
	clayLogin.controller('LoginCtrl', LoginCtrl);
	clayLogin.factory('LoginFactory', LoginFactory);

	return clayLogin;
});
