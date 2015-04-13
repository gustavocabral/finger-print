import DS from 'ember-data';

var Job = DS.Model.extend({
	date: DS.attr('date'),
	doc: DS.belongsTo('doc', { async: true }),
	printer: DS.belongsTo('printer', { async: true }),
	detail: DS.belongsTo('detail', { async: true })
});

Job.reopenClass({
	FIXTURES: [ { id: 1, doc: 1, printer: 1, detail: 1, date: '12/12/2012'},
	            { id: 2, doc: 2, printer: 2, detail: 2, date: '11/11/2011'} ]
});

export default Job;