var chennai = angular.module("chennai", ['ngRoute']);

chennai.run(function ($rootScope) {
	$rootScope.arrayStationNames = arrayStationNames;
	$rootScope.whenLocationChange = false;

	$rootScope.$watch($rootScope.whenLocationChange, function () {})

});

chennai.config(['$routeProvider',

	function($routeProvider) {
		$routeProvider.
		when('/home', {
			templateUrl: 'template/home.html'
		})
		.when('/search', {
			templateUrl: 'template/search.html',
			controller: function ($scope) {
				$scope.stationsChanged = stationsChanged;
			}
		})
		.when('/train/:trainid/time/:timeid', {
			templateUrl: 'template/detail.html'
		}).
		otherwise({
			redirectTo: '/home'
		});
	}]);


chennai.controller("main", function ($scope, $rootScope, $location, $anchorScroll) {

	// $scope.whenSearch = false;
	// $scope.searchRequested = function (isSearch) {
	// 	$scope.whenSearch = !isSearch;
	// };


	$scope.changeLocationRequested = function (toggle) {
		$rootScope.whenLocationChange = !toggle;


		$scope.section1.whenInlineChange = false;
		$scope.section2.whenInlineChange = false;
		$scope.section3.whenInlineChange = false;
		$scope.section4.whenInlineChange = false;

		$location.hash("firstTrainChart");
		$anchorScroll();
		$location.hash("");
	};
});