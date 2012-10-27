'use strict';

/* Controllers */

function HomeCtrl($scope, $navigate, $waitDialog, Eatsafe) {
	$scope.searchFor = function() {
		$waitDialog.show();
		$scope.foodplace = Eatsafe.get({search: $scope.search}, function(foodplace){});
		$waitDialog.hide();
	}
	$scope.showDetail = function(place) {
		$waitDialog.show();
		$scope.business = place;
		$waitDialog.hide();
		$navigate("#detail");
	}
}
//HomeCtrl.$inject = ['$scope', '$navigate', '$waitDialog', 'Eatsafe'];