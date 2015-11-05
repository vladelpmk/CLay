require(['config'], function() {
	require(['infrastructure'], function() {
		require(['angular', 'app'], function(angular, app) {
			angular.bootstrap(document, [app.name]);
		});
	});
});