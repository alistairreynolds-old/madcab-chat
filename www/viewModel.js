function viewModel(){

	var self = this;

	self.user = function(){
		var that = this;

		that.email = ko.observable('asd');
		that.login = function(email){
			model.user.email = email;
			this.email(email);
		};
	};

};