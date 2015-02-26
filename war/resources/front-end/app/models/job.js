import DS from 'ember-data';

var Job = DS.Model.extend({
	date: DS.attr('date'),
	document: DS.belongsTo('document', { async: true }),
	printer: DS.belongsTo('printer')
});

Job.reopenClass({
	FIXTURES: [ { id: 1, document: 1, date: '12/12/2012'},
	            { id: 2, document: 2, date: '11/11/2011'} ]
});

export default Job;