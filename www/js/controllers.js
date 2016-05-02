angular.module('starter.controllers', ['starter.services'])


.controller("IntroCtrl", function($scope, $state, $ionicPopup)//, authService)
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

	console.log("Introduction controller")


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
			$state.go('tab.dash');
			//$scope.result = authService.Login($scope.data.username, $scope.data.password);
		}
	}

	$scope.createAccount = function()
	{
		console.log("Create new account!!!")
		$state.go('newUser');
	}
})

.controller("newUserCtrl", function($scope, $state)//, authService)
{
	console.log("New user...")
});
;
