require.config({

	// alias libraries paths
	paths: {
		// infrastructure includes all libs
		//'infrastructure': 'infrastructure',
		// core webmail codebase included by app
		//'webmail': 'webmail',

		// vendor libaries - for core
		'jquery': 'vendor/jquery/dist/jquery',
		'angular': 'vendor/angular/angular',
		'ng-storage': 'vendor/ngstorage/ngStorage',
		'angular-ui-router': 'vendor/angular-ui-router/release/angular-ui-router',
		'angular-ui-router-extras': 'vendor/ui-router-extras/release/ct-ui-router-extras',
		'angular-translate': 'vendor/angular-translate/angular-translate',
		'angular-translate-loader-static-files': 'vendor/angular-translate-loader-static-files/angular-translate-loader-static-files',
		'bootstrap': 'vendor/bootstrap/dist/js/bootstrap',
		'bootstrap': 'vendor/bootstrap/dist/js/bootstrap',
		'oclazyload': 'vendor/oclazyload/dist/ocLazyLoad',

		//components
		'clayTranslate': 'components/translate/translate',
		'clayLanguage': 'components/language/language',
		'clayAuth': 'components/auth/auth',
	},

	// define dependencies among libraries
	shim: {
		'angular': {
			deps: ['jquery'],
			exports: 'angular'
		},
		'jquery': {
			exports: '$'
		},
		'angular-ui-router': ['angular'],
		'ng-storage': ['angular'],
		'angular-ui-router-extras': ['angular-ui-router'],
		'angular-translate': ['angular'],
		'angular-translate-loader-static-files': ['angular-translate'],
		'bootstrap': ['jquery'],
		'oclazyload': ['angular']
	}
});
