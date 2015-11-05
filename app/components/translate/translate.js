define([
	'angular',
	'components/translate/translate-factory',
	'angular-translate',
	'angular-translate-loader-static-files'
], function(angular, TranslateFactory) {
	var clayTranslate = angular.module('clayTranslate', ['pascalprecht.translate']);

	clayTranslate.config(['$translateProvider', 
		function($translateProvider) {

			$translateProvider.useStaticFilesLoader({
				prefix: 'i18n/',
				suffix: '.json'
			});

			$translateProvider.fallbackLanguage('en_US');
			$translateProvider.preferredLanguage('en_US');
	}]);

	clayTranslate.factory('TranslateFactory', TranslateFactory);

	return clayTranslate;
});
