import Ember from 'ember';

var Router = Ember.Router.extend({
  location: FingerPrintENV.locationType
});

Router.map(function() {
	this.resource('print', {path: '/print/:id'}, function () {
		this.route('documents');
		//this.route('printers');
		//this.route('options');
		//this.route('payment');
		//this.route('conclusion');
	});
});

export default Router;
