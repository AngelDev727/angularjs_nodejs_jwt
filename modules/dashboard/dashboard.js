(function (window, angular, undefined) {
	'use strict';

	angular.module('myApp').controller('dashboardCtrl', dashboardCtrl);

	dashboardCtrl.$inject = ['$scope'];

   //controller for cf apps
	function dashboardCtrl($scope) {
		$scope.apps_loaded = false;
	}
});