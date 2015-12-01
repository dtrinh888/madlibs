angular.module('myApp', ["ngMessages"])
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
		$scope.wordInput=true;
		$scope.showValid = function(){
			if ($scope.myMadlibs.$valid) {
				$scope.wordInput = false;
			}
		};
	}]);