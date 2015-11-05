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
	var clayApp = angular.module('clayApp', [
        'ui.router',
        'ct.ui.router.extras',
        'oc.lazyLoad',
        'clayTranslate']);

	clayApp.config(['$ocLazyLoadProvider', '$stateProvider', '$futureStateProvider', '$urlRouterProvider',
		function ($ocLazyLoadProvider, $stateProvider, $futureStateProvider, $urlRouterProvider) {

			$ocLazyLoadProvider.config({
				debug: false,
				jsLoader: requirejs,
				loadedModules: ['clayApp'],
				modules: [{
					reconfig: true,
					name: 'clayLogin',
					files: ['sections/login/login']
				}]
			});

			var ocLazyLoadStateFactory = function ($log, $q, $ocLazyLoad, futureState) {
				var deferred = $q.defer();
				$ocLazyLoad.load(futureState.module).then(function (name) {
					deferred.resolve();
				}, function () {
					deferred.reject();
				});
				return deferred.promise;
			};

			$futureStateProvider.stateFactory('ocLazyLoad', ocLazyLoadStateFactory);

			var loadFutureStates = function ($q, $http) {
				return $http.get('futurestates.json').then(function (res) {
					angular.forEach(res.data, function (fstate) {
						$futureStateProvider.futureState(fstate);
					});
				});
			};

			$futureStateProvider.addResolve(loadFutureStates);

			$stateProvider.state('app', {
				url: "",
				abstract: true,
				views: {
					'app': {
						template: '<div ui-view="master" class="master"></div>'
					}
				}
			});

			$urlRouterProvider
				.when('', '/login')
				.when('/', '/login');
        }
	]);

	clayApp.controller('AppCtrl', AppCtrl);

	clayApp.run(['$rootScope', '$state', '$stateParams',
		function ($log, $rootScope, $state, $stateParams) {

			$rootScope.$state = $state;
			$rootScope.$stateParams = $stateParams;
		}
	]);



	return clayApp;
});
