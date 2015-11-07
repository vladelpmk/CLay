define([
	'angular-translate'
], function ($translate) {

	var TranslateFactory = function ($q, $translate) {
		var dataFactory = {};

		// array of all language objects
		var languages = [];

		// single current language object
		var curlang = null;

		dataFactory.getCurrentLanguage = function () {
			//$log.debug('return current language:', curlang);
			return curlang;
		};

		dataFactory.getSupportedLanguages = function () {
			var deferred = $q.defer();

			languages = [
				{
					lang: 'en_US',
					langkey: 'LANG_LANGUAGE_EN_US'
				},
				{
					lang: 'nl_NL',
					langkey: 'LANG_LANGUAGE_NL_NL'
				}
			];

			if (!curlang)
				curlang = languages[0].lang;

			deferred.resolve(languages);

			return deferred.promise;
		};

		dataFactory.changeLanguage = function (lang) {
			if (curlang != lang) {
				$translate.use(lang);
				curlang = lang;
			}
		};

		return dataFactory;
	};

	return ['$q', '$translate', TranslateFactory];
});
