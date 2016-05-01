angular.module('starter.controllers', ['starter.services'])


.controller("IntroController", function($scope, $state, $ionicPopup, authService)
{
	//authService.ClearCredentials();
	$scope.data = {};

	/*$scope.$on('event:authFailed', function(e, status)
	{
		var alertPopup = $ionicPopup.alert(
		{
			title: 'Connection to Open-Heart failed',
			template: 'Are you already registered? If yes, please check your credentials.'
		});
	});

	$scope.$on('event:authSucceed', function(e, status)
	{
		$state.go('tab.dash');
	});*/


	$scope.login = function()
	{
		//window.authService.SemaLogin();

		if(angular.isUndefined($scope.data.username) || angular.isUndefined($scope.data.password) ||
			$scope.data.username === '' || $scope.data.password === '')
		{
			var alertPopup = $ionicPopup.alert(
			{
				title: 'Missing information',
				template: 'Are you already registered? If yes, please fill all your credentials.'
			});
		}
		else
		{
			console.log("Got user=" + $scope.data.username + " and pass=" + $scope.data.password)

			$scope.result = authService.SemaLogin($scope.data.username, $scope.data.password);
		}
	}
});

;
