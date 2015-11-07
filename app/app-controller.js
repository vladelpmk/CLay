define([], function () {

	var AppCtrl = function ($scope, $state, $location, TranslateFactory, AuthFactory) {

		$scope.$on('$stateChangeStart',
			function (event, toState, toParams, fromState, fromParams) {
				if (toState.data.authreq && !AuthFactory.isAuth()) {
					$location.path('login');
				} else if (toState.name === 'app.login' && AuthFactory.isAuth()) {
					$location.path('dashboard');
				}
			});

		var init = function () {};

		init();
	};

	return ['$scope', '$state', '$location', 'TranslateFactory', 'AuthFactory', AppCtrl];
});
