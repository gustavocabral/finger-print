import Ember from 'ember';

export default Ember.Route.extend({	
	model: function (param) {
		return this.store.find('print', param.id);
	}
});
