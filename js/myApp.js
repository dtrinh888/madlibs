angular.module('myApp', [])
	.controller('madLibCtrl', ['$scope', function($scope){
		$scope.maleName = '';
		$scope.dirtyTask = '';
		$scope.obnoxCeleb = '';
		$scope.jobTitle = '';
		$scope.celebrity = '';
		$scope.hugeNumber = '';
		$scope.tediousTask = '';
		$scope.uselessSkill = '';
		$scope.adjective = '';
	}]);