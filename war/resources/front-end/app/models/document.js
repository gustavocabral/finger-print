import DS from 'ember-data';

var Doc = DS.Model.extend({
  name: DS.attr('string'),
  size: DS.attr('integer'),
  job: DS.belongsTo('job'),
  updatedAt: DS.attr('date')
});

Doc.reopenClass({
	FIXTURES: [ { id: 1, name: 'Project budget', size: 12, job: 1, updatedAt: '12/12/2012'},
	            { id: 2, name: 'Trip planning', size: 5, job: 2, updatedAt: '11/11/2011'} ]
});

export default Doc;