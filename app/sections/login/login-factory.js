define([

], function () {

	var LoginFactory = function ($q) {

		var dataFactory = {};

		dataFactory.loginUser = function (user) {
			var deferred = $q.defer();
			setTimeout(function () {
				if (user.username === "joe.doe@email.com" && user.password === "passpass") {
					var jsonUser = {
						name: "Joe",
						surname: "Doe"
					}
					deferred.resolve(jsonUser);
				} else {
					deferred.reject(false);
				}
			}, 500);
            return deferred.promise;
		}

		return dataFactory;
	};

	return ['$q', LoginFactory];
});
