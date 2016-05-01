angular.module('starter.services', ['ngResource'])

.service('authService', function ()
{
	console.log("Got in authService")
	var service = {};

	// Attempts to login to remote server
	service.Login = function (user, pwd, callback)
	{
		console.log("Yay!!!")
		var service = {};
	};
});