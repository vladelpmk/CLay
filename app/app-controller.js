define([
], function () {

	/**
	 * @ngdoc function
	 * @name clayApp.controller:AppCtrl
	 * @description
	 * The main application controller
	 */
	var AppCtrl = function ($scope) {
		$scope.test = "gorgievski.vladimir.l@gmail.com";
	};

	return ['$scope', AppCtrl];
});
