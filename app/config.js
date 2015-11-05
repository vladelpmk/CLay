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
		'bootstrap': 'vendor/bootstrap/dist/js/bootstrap',
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
		'bootstrap': ['jquery']
	}
});
