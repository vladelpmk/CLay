define([
], function () {

	var AppCtrl = function ($scope, $state, TranslateFactory) {

		var init = function () {
            TranslateFactory.changeLanguage('nl_NL');
			//$state.go('app.login');
		};

		init();
	};

	return ['$scope', '$state', 'TranslateFactory', AppCtrl];
});
