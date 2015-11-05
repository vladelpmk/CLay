define([
	'angular-translate'
], function($translate) {

	var TranslateFactory = function($log, $q, $translate) {
		var dataFactory = {};

		// array of all language objects
		var languages = [];

		// single current language object
		var curlang = null;

		dataFactory.getCurrentLanguage = function()
		{
			//$log.debug('return current language:', curlang);
			return curlang;
		};

		dataFactory.getSupportedLanguages = function()
		{
			var deferred = $q.defer();

			languages = [
				{
					lang: 'en_US',
					langkey: 'LANG_LANGUAGE_EN_US'
				},
				{
					lang: 'fr_CA',
					langkey: 'LANG_LANGUAGE_FR_CA'
				},
				{
					lang: 'de_GE',
					langkey: 'LANG_LANGUAGE_DE_GE'
				},
				{
					lang: 'es_ES',
					langkey: 'LANG_LANGUAGE_ES_ES'
				},
				{
					lang: 'es_CO',
					langkey: 'LANG_LANGUAGE_ES_CO'
				},
				{
					lang: 'es_MX',
					langkey: 'LANG_LANGUAGE_ES_MX'
				},
				{
					lang: 'it_IT',
					langkey: 'LANG_LANGUAGE_IT_IT'
				},
				{
					lang: 'pt_PT',
					langkey: 'LANG_LANGUAGE_PT_PT'
				},
				{
					lang: 'pt_BR',
					langkey: 'LANG_LANGUAGE_PT_BR'
				},
				{
					lang: 'el_GR',
					langkey: 'LANG_LANGUAGE_EL_GR'
				},
				{
					lang: 'ro_RO',
					langkey: 'LANG_LANGUAGE_RO_RO'
				},
				{
					lang: 'hu_HU',
					langkey: 'LANG_LANGUAGE_HU_HU'
				},
				{
					lang: 'sv_SE',
					langkey: 'LANG_LANGUAGE_SV_SE'
				}
				
			];

			if (!curlang)
				curlang = languages[0].lang;

			deferred.resolve(languages);

			return deferred.promise;
		};

		dataFactory.changeLanguage = function (lang) {
			if (curlang != lang)
			{
				$log.debug('Starting translation for '+lang+' ...');
				$translate.use(lang);
				curlang = lang;
				//$log.debug('language changed to:', curlang);
			}
		};

		return dataFactory;
	};

	return ['$log', '$q', '$translate', TranslateFactory];
});
