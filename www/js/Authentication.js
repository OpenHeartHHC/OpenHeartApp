angular.module('starter.services')


.service('authService',	function ($rootScope)
{
	var service = {
		//Establish connection to SEMA server
		SemaLogin: function($user, $pass)
		{
			console.log("Try auth with user=" + $user + " and pass=" + $pass)
		}
	};

	return service;
})


;