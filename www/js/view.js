function View(){
	var self = this;

	self.generateLogin = function(){
		var html = '<div id="login">' + 
			'Login: <input type="text" placeholder="Email"><br />' + 
			'<input type="password" placeholder = "Password"> <br />' +
			'<input type="button" id="but_login" value="Login">' +
			'<input type="button" id="but_register" value="Register">' +
		'</div>';

		return html;
	}
}

var view = new View();