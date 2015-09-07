function ViewModel(){

	var self = this;
	var firebaseRef = new Firebase('https://madcab-chat.firebaseio.com');
	var authData = firebaseRef.getAuth();
	var angularApp = angular.module('madcab-chat', ['firebase']);

	self.init = function(){
		self.checkLogin();
	};

	// Check user login
	self.checkLogin = function(){		
		if (self.authData) {
			return authData;
		}else{
			$('#mainContent').html(view.generateLogin());
		}
	};

	self.User = function(email){
		var that = this;
	};


};

var viewModel = new ViewModel();
viewModel.init();