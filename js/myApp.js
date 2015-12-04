angular.module('myApp', ['ngMessages', 'ngAnimate'])
	.controller('madLibCtrl', ['$scope', function($scope){
		$scope.maleName = 'test';
		$scope.dirtyTask = 'test';
		$scope.obnoxCeleb = 'test';
		$scope.jobTitle = 'test';
		$scope.celebrity = 'test';
		$scope.hugeNumber = 5;
		$scope.tediousTask = 'test';
		$scope.uselessSkill = 'test';
		$scope.adjective = 'test';
		$scope.wordInput=true;
		$scope.showValid = function(){
			if ($scope.myMadlibs.$valid) {
				$scope.wordInput = false;
			}
		};

		$scope.resetForm = function(){
			$scope.myMadlibs.$submitted = false;
			$scope.myMadlibs.$setPristine(); 
			$scope.myMadlibs.$setUntouched();
			$scope.wordInput = true;
			$scope.maleName = '';
			$scope.dirtyTask = '';
			$scope.obnoxCeleb = '';
			$scope.jobTitle = '';
			$scope.celebrity = '';
			$scope.hugeNumber = '';
			$scope.tediousTask = '';
			$scope.uselessSkill = '';
			$scope.adjective = '';
		};
	}]);