define(['ng-storage'], function ($localStorage) {

	var AuthFactory = function ($q, $localStorage) {
		var dataFactory = {};
        
        dataFactory.logOut = function(){
            var deferred = $q.defer();
			setTimeout(function () {
				$localStorage.logedIn = false;
                $localStorage.user = {};
                deferred.resolve(true);
			}, 500);
            return deferred.promise;
        }
        
        dataFactory.isAuth = function(){
            return $localStorage.logedIn;
        }
        
         dataFactory.getCurrentUser = function(){
            return $localStorage.user;
        }
		
		return dataFactory;
	};

	return ['$q','$localStorage', AuthFactory];
});
