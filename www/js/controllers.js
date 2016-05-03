angular.module('starter.controllers', ['starter.services'])


.controller("IntroCtrl", function($scope, $state, $ionicPopup, authService, usersService)
{
	//authService.ClearCredentials();
	$scope.data = {};

	$scope.users = usersService.getAll();

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
	$scope.data.remember = true


	$scope.login = function()
	{
		//window.authService.SemaLogin();

		if(angular.isUndefined($scope.data.username) || angular.isUndefined($scope.data.password) ||
			$scope.data.username === '' || $scope.data.password === '')
		{
			var alertPopup = $ionicPopup.alert(
			{
				title: 'Missing information',
				template: '<center>Are you already registered? If yes, please fill all your credentials.</center>'
			});
		}
		else
		{
			//console.log("Got user=" + $scope.data.username + " and pass=" + $scope.data.password)
			//console.log("Remember me? " + $scope.data.remember)

			//$state.go('tab.dash');
			$scope.result = authService.Login($scope.data.username, $scope.data.password, $scope.data.remember);
			if($scope.result == true)
			{
				if($scope.data.remember == true)
				{
					window.localStorage.setItem("username", $scope.data.username);
					window.localStorage.setItem("password", $scope.data.password);
				}
				
				$state.go('tab.dash');
			}
			else
			{
				var alertPopup = $ionicPopup.alert(
				{
					title: 'Login failed',
					template: '<center>Are you already registered? If yes, please check your credentials.</center>'
				});
			}
		}
	}

	$scope.createAccount = function()
	{
		console.log("Create new account!!!")
		$state.go('newUser');
	}
})

.controller("newUserCtrl", function($scope, $state, $ionicPopup)//, authService)
{
	console.log("New user..." + window.localStorage.getItem("username"))


	$scope.data = {};

	$scope.registerUser = function()
	{
		if(angular.isUndefined($scope.data.username) || angular.isUndefined($scope.data.password) ||
			$scope.data.username === '' || $scope.data.password === '')
		{
			var alertPopup = $ionicPopup.alert(
			{
				title: 'Missing information',
				template: '<center>You need to at least fill a username and password</center>'
			});
		}
		else
		{
			console.log("New user registered!")

			window.localStorage.setItem("username", $scope.data.username);
			window.localStorage.setItem("password", $scope.data.password);

			var alertPopup = $ionicPopup.alert(
			{
				title: 'Welcome to Open-Heart, ' + $scope.data.username + ' !',
				template: '<center>You are now successfully registered to Open-Heart. Enjoy your journey!</center>'
			});
			
			$state.go('tab.dash');
		}
	}
});
;
