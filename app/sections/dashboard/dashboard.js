define([
	'angular',
	'sections/dashboard/dashboard-controller',
    'sections/dashboard/dashboard-factory'
], function (angular, DashboardCtrl, DashboardFactory) {

	var clayDashboard = angular.module('clayDashboard', []);

	clayDashboard.config(['$stateProvider', '$urlRouterProvider',
		function ($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state('app.nav0.dashboard', {
					url: "/dashboard",
					views: {
						'workspace': {
							templateUrl: 'sections/dashboard/dashboard.html',
							controller: 'DashboardCtrl'
						}
					},
					data: {
						authreq: true
					}
				});
	}]);

	clayDashboard.controller('DashboardCtrl', DashboardCtrl);
    clayDashboard.factory('DashboardFactory',DashboardFactory);

	return clayDashboard;
});
