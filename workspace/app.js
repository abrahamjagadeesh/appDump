var chennai = angular.module('chennai', []);

function load_stations($scope, $timeout, fn_createCurrentStationTimeTable) {

	$scope.stations = shortcodes; //assign all the stations
	$scope.source = 'MSB';
	$scope.destination = 'TBM';

	$scope.fn_changeSourceStation = function(selectedSource){
		$scope.source = selectedSource[0];
		var ntrains = fn_createCurrentStationTimeTable.fn_timeTableCurrentStation($scope.source,$scope.destination);
	
	$scope.timetable = ntrains.nextTrain;
	$scope.allTrains = ntrains.nextTrains;
	}
	$scope.fn_changeDestinationStation = function(selectedDestination){
		$scope.destination = selectedDestination[0];
		var ntrains = fn_createCurrentStationTimeTable.fn_timeTableCurrentStation($scope.source,$scope.destination);
	
	$scope.timetable = ntrains.nextTrain;
	$scope.allTrains = ntrains.nextTrains;
	}
	var ntrains = fn_createCurrentStationTimeTable.fn_timeTableCurrentStation($scope.source,$scope.destination);
	
	$scope.timetable = ntrains.nextTrain;
	$scope.allTrains = ntrains.nextTrains;
	
}

chennai.factory('fn_createCurrentStationTimeTable', function() {

	return {
		fn_timeTableCurrentStation: function(source, destination) {
			return trainsStopInThisStation(source,destination);
		}

	}
})