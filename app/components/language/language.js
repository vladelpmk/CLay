define([
    'angular',
    'components/language/language-controller'
       ], function (angular, LanguageCtrl) {
	var clayLanguage = angular.module('clayLanguage', ['ngStorage']);

	clayLanguage.controller("LanguageCtrl", LanguageCtrl);

	return clayLanguage;
});
