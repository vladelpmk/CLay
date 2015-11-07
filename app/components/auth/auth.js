define([
	'angular',
    'components/auth/auth-factory',
    'components/auth/auth-controller'
], function (angular, AuthFactory, AuthCtrl) {
    
	var clayAuth = angular.module('clayAuth', ['ngStorage']);

	clayAuth.controller('AuthCtrl', AuthCtrl);
	clayAuth.factory('AuthFactory', AuthFactory);

	return clayAuth;
});
