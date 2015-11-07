define(['ng-storage'], function ($localStorage) {

	var LanguageCtrl = function ($scope, TranslateFactory, $localStorage) {

		$scope.changeLanguage = function (newLanguage) {
			if (newLanguage !== $scope.selectedLanguage) {
				$scope.selectedLanguage = newLanguage;
				$localStorage.language = $scope.selectedLanguage;
				TranslateFactory.changeLanguage($scope.selectedLanguage.i18n);
			}
		}

		var init = function () {
			$scope.aveableLanguages = [{
				i18n: 'en_US',
				name: "English",
				flag: "flag-icon-us"
            }, {
				i18n: 'nl_NL',
				name: "Duch",
				flag: "flag-icon-nl"
            }];

			if ($localStorage) {
				if ($localStorage.language) {
					$scope.selectedLanguage = $localStorage.language;
				} else {
					$scope.selectedLanguage = $scope.aveableLanguages[0];;
				}
			} else {
				$scope.selectedLanguage = $scope.aveableLanguages[0];;
			}
			TranslateFactory.changeLanguage($scope.selectedLanguage.i18n);
		};

		init();
	};
	return ['$scope', 'TranslateFactory', '$localStorage', LanguageCtrl];
});
