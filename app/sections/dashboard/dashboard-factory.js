define([

], function () {

	var DashboardFactory = function ($q) {

		var dataFactory = {};

		dataFactory.openDorForMinute = function (door) {
			var deferred = $q.defer();
			setTimeout(function () {
				deferred.resolve(true);
			}, 4000);
			return deferred.promise;
		};

		dataFactory.getMyDoors = function () {
			var deferred = $q.defer();
			setTimeout(function () {
				var doors = [
					{
						name: "Jeain's place",
						img: "images/dor-123.jpg",
						map: "images/map-123.png",
						description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
						status: "Locked",
						accessableBy: [
							{
								fullName: "Vladimir Gjorgievski",
								img: 'images/user-1.jpg',
                            },
							{
								fullName: "Elena Gjorgievski",
								img: 'images/user-3.jpg',
								timePeriod: '6:00pm - 8:00pm on Mondays'
                            },
							{
								fullName: "The Q",
								img: 'images/user-q.jpg',
								timePeriod: 'Always'
                            },
							{
								fullName: "Petar Gjorgievski",
								img: 'images/user-4.jpg',
								timePeriod: '6:00pm - 8:00pm on 11/11/2015'
                            },
							{
								fullName: "Tome Tasevski",
								img: 'images/user-2.jpg',
                            }
                        ]
					},
					{
						name: "Joe's place",
						img: "images/dor-23761.jpg",
						map: "images/map-123.png",
						description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
						status: "Locked",
						accessableBy: [
							{
								fullName: "Vladimir Gjorgievski",
								img: 'images/user-1.jpg',
                            },
							{
								fullName: "The Q",
								img: 'images/user-q.jpg',
								timePeriod: 'Always'
                            }
                        ]
					}
                    ];

				deferred.resolve(doors);
			}, 500);
			return deferred.promise;
		}

		return dataFactory;
	};

	return ['$q', DashboardFactory];
});
