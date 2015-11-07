define([
    'ng-storage',
], function () {

	var DashboardCtrl = function ($scope, $state, DashboardFactory) {

		var minuteTimeout;

		$scope.unlockForMinute = function (door) {
			door.bissy = true;
			clearTimeout(minuteTimeout);

			DashboardFactory.openDorForMinute(door).then(function () {
				door.status = "Unlocked";
				door.bissy = false;

				minuteTimeout = setTimeout(function () {
					door.status = "Locked";
					$scope.$apply()
				}, 60000);

			}, function () {
				alert("ERROR");
			});

		}

		var init = function () {
			DashboardFactory.getMyDoors().then(function (data) {
				$scope.doors = data;
			});

			function initMap() {

			}
		};
		init();

	};
	return ['$scope', '$state', 'DashboardFactory', DashboardCtrl];
});
