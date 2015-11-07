define([
    'ng-storage',
	'sections/login/login-factory'
], function (LoginFactory) {

	var LoginCtrl = function ($scope, $state, LoginFactory, $localStorage) {

		$scope.submitLogin = function () {
			if ($scope.validateUser()) {
				var user = {
					username: $scope.user.username,
					password: $scope.user.password
				}

				LoginFactory.loginUser(user).then(function (data) {
					$localStorage.logedIn = true;
					$localStorage.user = data;
                    $state.go('app.nav0.dashboard');
				}, function (data) {
					$scope.user.generalErrorLabel = 'LANG_WRONG_USERNAME_OR_PASSWORD'
				});
			}
		}

		$scope.validateUser = function () {
			var error = false;
			$scope.user.usernameErrorLabel = "";
			$scope.user.passwordErrorLabel = "";
			$scope.user.generalErrorLabel = "";

			if ($scope.user.username.length < 1) {
				$scope.user.usernameErrorLabel = 'LANG_USERNAME_IS_REQUIRED';
				error = true;
			};

			if ($scope.user.password.length < 1) {
				$scope.user.passwordErrorLabel = 'LANG_PASSWORD_IS_REQUIRED';
				error = true;
			};

			return !error;
		}

		var init = function () {
			$scope.user = {
				username: '',
				usernameErrorLabel: '',
				password: '',
				passwordErrorLabel: '',
				rememberMe: false
			};
		};
		init();

	};
	return ['$scope', '$state', 'LoginFactory', '$localStorage', LoginCtrl];
});
