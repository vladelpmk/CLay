define([
	'angular',
    'app-controller'
], function (angular, AppCtrl) {
	/**
	 * @ngdoc overview
	 * @name clayApp
	 * @description
	 * The main application module
	 */
	var clayApp = angular.module('clayApp', []);

	clayApp.config([
		function () {}
	]);

	clayApp.controller('AppCtrl', AppCtrl);

	clayApp.run([
        function () {}
    ]);
    
	return clayApp;
});
