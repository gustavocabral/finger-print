import DS from 'ember-data';

var Print = DS.Model.extend({
	date: DS.attr('date'),
	//printer: DS.hasOne('printer'),
	//document: DS.hasOne('document')
});

Print.reopenClass({
	FIXTURES: [ { id: 1, date: '12/12/2012'},
	            { id: 2, date: '11/11/2011'} ]
});

export default Print;